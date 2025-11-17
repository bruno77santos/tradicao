// src/app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { MercadoLivreProduct } from '@/types';

const USER_ID = '569525343'; // ID do vendedor no Mercado Livre

export async function GET(_request: NextRequest) {
  try {
    // 1️⃣ Buscar os IDs dos produtos do vendedor
    const searchUrl = `https://api.mercadolibre.com/users/${USER_ID}/items/search?limit=50`;
    const searchResponse = await fetch(searchUrl, { next: { revalidate: 3600 } });

    if (!searchResponse.ok) {
      const errorData = await searchResponse.json().catch(() => ({ message: 'Resposta sem JSON' }));
      console.error('Erro na busca de IDs:', {
        status: searchResponse.status,
        statusText: searchResponse.statusText,
        data: errorData,
      });
      throw new Error(`Falha ao buscar IDs dos produtos: ${searchResponse.statusText} (${searchResponse.status})`);
    }

    const searchData = await searchResponse.json();
    const productIds: string[] = searchData.results || [];

    if (productIds.length === 0) {
      return NextResponse.json({ products: [] });
    }

    // 2️⃣ Buscar os detalhes de cada produto individualmente
    const items = await Promise.all(
      productIds.slice(0, 20).map(async (id) => {
        try {
          const itemResponse = await fetch(`https://api.mercadolibre.com/items/${id}`);
          if (!itemResponse.ok) return null;
          return await itemResponse.json();
        } catch {
          return null;
        }
      })
    );

    // 3️⃣ Mapear os produtos para o formato desejado
    const products: MercadoLivreProduct[] = items
      .filter(Boolean)
      .map((item: any) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        currency: item.currency_id,
        permalink: item.permalink,
        thumbnail: item.thumbnail?.replace(/^http:/, 'https:'),
        condition: item.condition,
        available_quantity: item.available_quantity,
        sold_quantity: item.sold_quantity,
      }));

    // 4️⃣ Retornar resposta
    return NextResponse.json({ products });
  } catch (error) {
    console.error('Erro ao processar a requisição de produtos:', error);
    return NextResponse.json(
      { error: 'Falha interna ao carregar produtos' },
      { status: 500 }
    );
  }
}
