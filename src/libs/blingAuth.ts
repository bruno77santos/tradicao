import { unstable_cache as cache } from 'next/cache';

// Interface para a resposta do token
interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

// Esta função busca um novo access token usando o refresh token.
// Usamos o `cache` do Next.js para evitar buscar um novo token em cada requisição.
// O token será mantido em cache até expirar.
export const getBlingAccessToken = cache(
  async (): Promise<string> => {
    const clientId = process.env.BLING_CLIENT_ID;
    const clientSecret = process.env.BLING_CLIENT_SECRET;
    const refreshToken = process.env.BLING_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      throw new Error('Credenciais OAuth2 do Bling não configuradas.');
    }

    const tokenUrl = 'https://www.bling.com.br/Api/v3/oauth/token';
    
    // O cabeçalho de autorização para a troca de token é um Basic Auth com ClientID:ClientSecret
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}` ).toString('base64');

    const body = new URLSearchParams();
    body.append('grant_type', 'refresh_token');
    body.append('refresh_token', refreshToken);

    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro ao renovar token do Bling:", errorData);
        throw new Error('Falha ao obter access token do Bling.');
      }

      const tokenData: TokenResponse = await response.json();
      
      // IMPORTANTE: O Bling pode retornar um novo refresh_token.
      // Em uma aplicação real, você deveria persistir este novo token
      // para a próxima vez. Para este exemplo, vamos ignorar essa parte.
      console.log('Novo Access Token do Bling gerado com sucesso.');

      return tokenData.access_token;

    } catch (error) {
      console.error("Erro crítico na autenticação com o Bling:", error);
      throw error;
    }
  },
  ['bling_access_token'], // Chave para o cache
  {
    // O `revalidate` deve ser um pouco menor que o tempo de expiração real do token
    // para garantir que ele seja renovado antes de expirar.
    // Ex: Se o token expira em 3600s (1 hora), usamos 3500s.
    revalidate: 3500, 
  }
);
