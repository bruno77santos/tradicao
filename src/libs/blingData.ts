import { getBlingAccessToken } from '@/libs/blingAuth'; // Reutilizamos nosso helper de autenticação

// --- As Interfaces e a função delay permanecem as mesmas ---
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Definimos o tipo do produto que será retornado
export interface BlingProduct {
  id: bigint;
  nome: string;
  sku: string;
  mercadoLivreId: string;
  preco: number;
  estoque: number;
  imageUrl: string | null;
  url: string;
}

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

// --- FUNÇÃO DE FETCH COM LÓGICA DE RETENTATIVA (BACKOFF) ---
async function fetchProductDetailsWithRetry(productId: number, headers: HeadersInit, maxRetries = 5): Promise<BlingProductDetails | null> {
    let attempt = 0;
    let currentDelay = 1000;
    while (attempt < maxRetries) {
        try {
            const response = await fetch(`https://bling.com.br/Api/v3/produtos/${productId}`, { headers }  );
            if (response.ok) { const { data } = await response.json(); return data; }
            if (response.status === 404) { return null; }
            if (response.status === 429) {
                await delay(currentDelay);
                currentDelay *= 2;
                attempt++;
            } else {
                await delay(currentDelay);
                currentDelay *= 2;
                attempt++;
            }
        // CORREÇÃO 1: Renomear 'error' para '_error'
        } catch (_error) {
            await delay(currentDelay);
            currentDelay *= 2;
            attempt++;
        }
    }
    return null;
}

// --- FUNÇÃO PRINCIPAL DE BUSCA DE DADOS ---
export async function getBlingProducts(): Promise<BlingProduct[]> {
  const mercadoLivreLojaId = process.env.BLING_MERCADOLIVRE_LOJA_ID;

  if (!mercadoLivreLojaId) {
    console.error('ID da loja Mercado Livre não configurado.');
    return [];
  }

  try {
    const accessToken = await getBlingAccessToken();
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json',
    };

    // 1. BUSCAR TODOS OS VÍNCULOS COM PAGINAÇÃO
    // CORREÇÃO 2: 'let' alterado para 'const'
    const allLinks: BlingProductLink[] = [];
    let currentPage = 1;
    let hasMorePages = true;
    while (hasMorePages) {
      const linksUrl = `https://bling.com.br/Api/v3/produtos/lojas?idLoja=${mercadoLivreLojaId}&pagina=${currentPage}&limite=100`;
      const linksResponse = await fetch(linksUrl, { headers }  );
      if (!linksResponse.ok) { hasMorePages = false; continue; }
      const { data: pageLinks } = await linksResponse.json();
      if (pageLinks && pageLinks.length > 0) { allLinks.push(...pageLinks); currentPage++; } else { hasMorePages = false; }
    }
    const validLinks = allLinks.filter(item => item.codigo && item.codigo.startsWith('MLB'));

    // 2. PROCESSAR EM FILA SEQUENCIAL
    const finalProducts: BlingProduct[] = [];
    for (const link of validLinks) {
      const details = await fetchProductDetailsWithRetry(link.produto.id, headers);
      if (details) {
        const imageUrl = details.midia?.imagens?.externas?.[0]?.link ?? null;
        finalProducts.push({
          id: BigInt(details.id),
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
    return finalProducts;
  } catch (error) {
    console.error('Erro fatal ao buscar produtos do Bling:', error);
    return [];
  }
}