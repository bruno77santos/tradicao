import { NextResponse } from 'next/server';
import { getBlingProducts } from '@/libs/blingData'; // Reutilizamos nossa função de busca!
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Esta rota será protegida por uma chave secreta para que só o Cron Job possa chamá-la
const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  if (secret !== CRON_SECRET) {
    return NextResponse.json({ error: 'Acesso não autorizado.' }, { status: 401 });
  }

  try {
    console.log('Iniciando sincronização de produtos...');
    const blingProducts = await getBlingProducts();
    console.log(`Bling retornou ${blingProducts.length} produtos.`);

    // Usando uma transação do Prisma para atualizar ou criar produtos
    const upsertPromises = blingProducts.map(product =>
      prisma.product.upsert({
        where: { id: product.id }, // Encontra o produto pelo ID do Bling
        update: { // Se encontrar, atualiza os dados
          nome: product.nome,
          sku: product.sku,
          preco: product.preco,
          estoque: product.estoque,
          imageUrl: product.imageUrl,
          url: product.url,
          mercadoLivreId: product.mercadoLivreId,
        },
        create: { // Se não encontrar, cria um novo registro
          id: product.id,
          nome: product.nome,
          sku: product.sku,
          preco: product.preco,
          estoque: product.estoque,
          imageUrl: product.imageUrl,
          url: product.url,
          mercadoLivreId: product.mercadoLivreId,
        },
      })
    );

    await prisma.$transaction(upsertPromises);

    console.log('Sincronização concluída com sucesso!');
    return NextResponse.json({ message: 'Sincronização concluída com sucesso!' });

  } catch (error) {
    console.error('Erro durante a sincronização:', error);
    return NextResponse.json({ error: 'Falha na sincronização.' }, { status: 500 });
  }
}
