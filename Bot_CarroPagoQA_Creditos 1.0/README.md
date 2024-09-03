# Bot de Consulta de Créditos - Carro Pago
Este bot foi desenvolvido para realizar consultas de créditos no WhatsApp de forma automatizada, especificamente com o contato "Carro Pago QA". Ele oferece suporte para dois tipos de consultas:

Consulta de CPF: Verifica o status de créditos vinculados a um CPF.
Consulta de CNPJ: Verifica o status de créditos vinculados a um CNPJ.

# Como Funciona
Conexão com o WhatsApp:

O bot acessa o WhatsApp Web remotamente através do framework Puppeteer.
Intervenção do Usuário: É necessário que o usuário escaneie manualmente o QR Code exibido no terminal para conectar o WhatsApp. Esse é um passo fundamental para a execução do bot.
Interação com o Contato:

Após a conexão bem-sucedida, o bot localiza o contato "Carro Pago QA" no WhatsApp.
O bot então inicia a interação, realizando as consultas solicitadas (CPF ou CNPJ).

# Requisitos
Para rodar o bot, é necessário ter o Node.js instalado em sua máquina.

# Como Executar
1. Clone este repositório em sua máquina local.

2. Navegue até o diretório onde o arquivo do bot está localizado.

3. Execute o seguinte comando no terminal:
    "consulta_credito.js"

4. Ao executar o comando, um QR Code será exibido no terminal. Escaneie o QR Code com o aplicativo do WhatsApp para iniciar a sessão.

5. Após a conexão, o bot iniciará automaticamente a interação com o contato "Carro Pago QA" e realizará as consultas necessárias.

# Observações
Este bot requer que o WhatsApp Web seja conectado manualmente toda vez que for executado.
Mantenha o WhatsApp ativo e conectado à internet durante a execução para garantir que as consultas sejam realizadas com sucesso.