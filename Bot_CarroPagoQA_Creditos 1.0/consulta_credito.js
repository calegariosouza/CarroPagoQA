const puppeteer = require('puppeteer');

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('pt-BR', { hour12: false });
}

(async () => {
    // Inicia o navegador
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({
        width: 900,
        height: 900,
        deviceScaleFactor: 1,
    });

    // Acessa o WhatsApp Web
    await page.goto('https://web.whatsapp.com/');
    await new Promise(resolve => setTimeout(resolve, 30000));
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Whatsapp Conectado com Sucesso!`);

    // Pesquisa o contato "CarroPago QA"
    const contactName = "CarroPago QA";
    await page.click('div[aria-label="Pesquisar"]');
    await page.type('div[aria-label="Pesquisar"]', contactName);
    await new Promise(resolve => setTimeout(resolve, 20000));
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 20000));
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Contato CarroPago QA encontrado com Sucesso!`);

    // --------------------------------------------------------------------------------------------------------------- TESTE CONSULTA DE CREDITO CPF
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Inicio da consulta de CPF`);
    // Digita a mensagem na caixa de mensagem
    const messageBoxSelector = 'div[aria-label="Digite uma mensagem"][contenteditable="true"]';
    await page.click(messageBoxSelector);
    await page.type(messageBoxSelector, 'Reiniciar');
    // Simula a tecla Enter para enviar a mensagem
    await page.keyboard.press('Enter');
    // Aguarda 10 segundos
    await new Promise(resolve => setTimeout(resolve, 20000));

    // Interagem com a listagem
    await page.type(messageBoxSelector, 'Selecionar consulta');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 20000));

    // Clica na lista
    await page.click('[data-icon="list-msg-icon"]');
    await new Promise(resolve => setTimeout(resolve, 20000));

    // Seleciona a opção "Consulta Crédito CPF"
    await page.click('button[aria-label="3. Crédito CPF"]');
    await new Promise(resolve => setTimeout(resolve, 20000));
    // Clica no botão de enviar
    await page.click('[data-icon="send"]');
    await new Promise(resolve => setTimeout(resolve, 20000));
    // Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 20000));

    // Informando a CPF
    await page.type(messageBoxSelector, '12965139630');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 20000));
    // Confirmando se o cpf está correto e Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 90000));
    console.log(`[${getCurrentTime()}] Fim da consulta de CPF`);

    // --------------------------------------------------------------------------------------------------------------- TESTE CONSULTA DE CREDITO CNPJ
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Inicio da consulta de CNPJ`);
    // Digita a mensagem na caixa de mensagem
    await page.click(messageBoxSelector);
    await page.type(messageBoxSelector, 'Reiniciar');
    // Simula a tecla Enter para enviar a mensagem
    await page.keyboard.press('Enter');
    // Aguarda 10 segundos
    await new Promise(resolve => setTimeout(resolve, 20000));

    // Interagem com a listagem
    await page.type(messageBoxSelector, 'Selecionar consulta');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 20000));

    // Clica na lista
    await page.click('[data-icon="list-msg-icon"]');
    await new Promise(resolve => setTimeout(resolve, 20000));

    // Seleciona a opção "Consulta credito de CNPJ"
    await page.click('button[aria-label="4. Crédito CNPJ"]');
    await new Promise(resolve => setTimeout(resolve, 20000));
    // Clica no botão de enviar
    await page.click('[data-icon="send"]');
    await new Promise(resolve => setTimeout(resolve, 20000));
    // Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 200000));

    // Informando o CNPJ
    await page.type(messageBoxSelector, '45.997.418/0017-10');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 20000));
    // Confirmando se o cnpj está correto e Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 90000));
    console.log(`[${getCurrentTime()}] Fim da consulta de CNPJ`);

    // Fechar o navegador após a automação
    await browser.close();
})();
