
// Usamos 'import' em vez de 'require'
import fetch from 'node-fetch';

// --- PREENCHA ESTAS INFORMAÇÕES ---
const CLIENT_ID = '05e72eb68dd8f721f517a5d3bdaf745b03784c6c';
const CLIENT_SECRET = 'b68e686ad2eb1c2f3ebecba5bebc8a78e85d9e115ba66bd804ea82bd1efa';
const AUTH_CODE = '69cdf035c0c4c1e0f5202e974c08f205a11af3f7';

// ------------------------------------

async function exchangeCodeForTokens() {
  // Validação para garantir que o código foi trocado
  if (AUTH_CODE === 'cole_o_novo_codigo_de_autorizacao_aqui') {
    console.error("\nERRO: Por favor, gere um novo código de autorização e insira na variável 'AUTH_CODE' do script.\n");
    return;
  }

  const tokenUrl = 'https://www.bling.com.br/Api/v3/oauth/token';
  const basicAuth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}` ).toString('base64');
  const body = new URLSearchParams();
  body.append('grant_type', 'authorization_code');
  body.append('code', AUTH_CODE);

  try {
    console.log('Trocando o código de autorização por tokens...');
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: body.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Falha ao obter os tokens:', data);
      return;
    }

    console.log('\n--- SUCESSO! Tokens recebidos: ---');
    console.log(JSON.stringify(data, null, 2));
    console.log('\n--- AÇÃO NECESSÁRIA ---');
    console.log('Copie o valor do "refresh_token" e cole no seu arquivo .env.local na variável BLING_REFRESH_TOKEN.');

  } catch (error) {
    console.error('Ocorreu um erro na requisição:', error);
  }
}

exchangeCodeForTokens();
