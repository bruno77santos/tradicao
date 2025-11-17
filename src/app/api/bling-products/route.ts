import { NextResponse } from 'next/server';
import { getBlingAccessToken } from '@/libs/blingAuth';

// --- As Interfaces e a função delay permanecem as mesmas ---
interface BlingProductLink {
  codigo: string;
  preco: number;
  produto: { id: number };
}
interface BlingProductDetails {
  id: number;
  nome: string;
  codigo: string;
  estoque?: { saldoVirtualTotal: number };
  midia?: { imagens?: { externas?: { link: string }[] } };
}
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- FUNÇÃO DE FETCH COM LÓGICA DE RETENTATIVA (BACKOFF) ---
async function fetchProductDetailsWithRetry(productId: number, headers: HeadersInit, maxRetries = 5): Promise<BlingProductDetails | null> {
  let attempt = 0;
  let currentDelay = 1000; // Começa com 1 segundo de espera

  while (attempt < maxRetries) {
    try {
      const response = await fetch(`https://bling.com.br/Api/v3/produtos/${productId}`, { headers } );

      if (response.ok) {
        const { data } = await response.json();
        return data;
      }

      if (response.status === 404) {
        console.warn(`Produto ID ${productId} não encontrado (404). Pulando permanentemente.`);
        return null; // Não adianta tentar de novo
      }

      if (response.status === 429) {
        console.warn(`Rate limit (429) para o produto ID ${productId}. Tentativa ${attempt + 1} de ${maxRetries}. Esperando ${currentDelay}ms...`);
        await delay(currentDelay);
        currentDelay *= 2; // Dobra o tempo de espera para a próxima tentativa (backoff exponencial)
        attempt++;
      } else {
        // Para outros erros (500, 503, etc.), também vale a pena tentar de novo
        console.warn(`Erro ${response.status} para o produto ID ${productId}. Tentativa ${attempt + 1}. Esperando ${currentDelay}ms...`);
        await delay(currentDelay);
        currentDelay *= 2;
        attempt++;
      }
    } catch (error) {
      console.error(`Erro de rede ao buscar produto ID ${productId}. Tentativa ${attempt + 1}.`, error);
      await delay(currentDelay);
      currentDelay *= 2;
      attempt++;
    }
  }

  console.error(`Falha ao buscar produto ID ${productId} após ${maxRetries} tentativas.`);
  return null;
}

// --- FUNÇÃO PRINCIPAL DA API COM FILA SEQUENCIAL ---

export async function GET() {
  const mercadoLivreLojaId = process.env.BLING_MERCADOLIVRE_LOJA_ID;

  if (!mercadoLivreLojaId) {
    return NextResponse.json({ error: 'ID da loja não configurado.' }, { status: 500 });
  }

  try {
    const accessToken = await getBlingAccessToken();
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json',
    };

    // 1. BUSCAR TODOS OS VÍNCULOS COM PAGINAÇÃO
    // CORREÇÃO 1: 'let' alterado para 'const'
    const allLinks: BlingProductLink[] = [];
    let currentPage = 1;
    let hasMorePages = true;
    console.log("Iniciando busca de vínculos com paginação...");
    while (hasMorePages) {
      const linksUrl = `https://bling.com.br/Api/v3/produtos/lojas?idLoja=${mercadoLivreLojaId}&pagina=${currentPage}&limite=100`;
      const linksResponse = await fetch(linksUrl, { headers }  );
      if (!linksResponse.ok) { hasMorePages = false; continue; }
      const { data: pageLinks } = await linksResponse.json();
      if (pageLinks && pageLinks.length > 0) { allLinks.push(...pageLinks); currentPage++; } else { hasMorePages = false; }
    }
    console.log(`Busca de vínculos concluída. Total de ${allLinks.length} vínculos encontrados.`);
    const validLinks = allLinks.filter(item => item.codigo && item.codigo.startsWith('MLB'));

    // 2. PROCESSAR EM FILA SEQUENCIAL
    const finalProducts = [];
    console.log(`Iniciando processamento sequencial de ${validLinks.length} produtos...`);

    for (const [index, link] of validLinks.entries()) {
      console.log(`Processando produto ${index + 1} de ${validLinks.length} (ID: ${link.produto.id})...`);
      
      const details = await fetchProductDetailsWithRetry(link.produto.id, headers);

      if (details) {
        const imageUrl = details.midia?.imagens?.externas?.[0]?.link ?? null;
        finalProducts.push({
          id: details.id,
          nome: details.nome,
          sku: details.codigo,
          mercadoLivreId: link.codigo,
          preco: link.preco ?? 0,
          estoque: details.estoque?.saldoVirtualTotal ?? 0,
          imageUrl: imageUrl,
          url: `https://produto.mercadolivre.com.br/${link.codigo.replace('MLB', 'MLB-'  )}`,
        });
      }
      await delay(100);
    }

    console.log(`Processamento concluído. ${finalProducts.length} produtos foram carregados com sucesso.`);
    return NextResponse.json({ data: finalProducts });

  // CORREÇÃO 2: 'any' alterado para 'unknown' com verificação
  } catch (error: unknown) {
    console.error('Erro fatal na rota /api/bling-products:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro inesperado no servidor.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}