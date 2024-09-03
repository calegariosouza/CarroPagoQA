const puppeteer = require('puppeteer');

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('pt-BR', { hour12: false });
}

function scheduleScript(startTime) {
    const now = new Date();
    const targetTime = new Date(now.toDateString() + ' ' + startTime);
    
    if (targetTime < now) {
        // Se a hora agendada já passou hoje, agende para o mesmo horário no próximo dia
        targetTime.setDate(targetTime.getDate() + 1);
    }

    const delay = targetTime - now;

    console.log(`[${getCurrentTime()}] Script agendado para rodar às ${startTime}. Vai começar em ${(delay / 1000 / 60).toFixed(2)} minutos.`);

    setTimeout(async () => {
        console.log(`[${getCurrentTime()}] Iniciando o script...`);

        // Inicia o navegador
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.setViewport({
            width: 900,
            height: 900,
            deviceScaleFactor: 1, // Ajusta o fator de escala de dispositivo, pode ser aumentado para melhorar a densidade de pixels.
        });
    //------------------------------------------------------------------------------------

    // Acessa o WhatsApp Web
    await page.goto('https://web.whatsapp.com/');
    // Espera 20 segundos
    await new Promise(resolve => setTimeout(resolve, 30000));
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Whatsapp Conectado com Sucesso!`);


    // Pesquisa o contato "CarroPago QA"
    const contactName = "CarroPago QA";
    await page.click('div[aria-label="Pesquisar"]');
    await page.type('div[aria-label="Pesquisar"][contenteditable="true"]', contactName);
    // Espera 2 segundos
    await new Promise(resolve => setTimeout(resolve, 10000));
    // Aperta "Enter"
    await page.keyboard.press('Enter');
    // Espera 5 segundos
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Contato CarroPago QA encontrado com Sucesso!`);

    // --------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------

    // TESTE CONSULTA BÁSICA COM PLACA DE MINAS GERAIS - OPV6508
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Inicio da  consulta básica com placa de Minas Gerais - OPV6508`);
    // Digita a mensagem na caixa de mensagem
    const messageBoxSelector = 'div[aria-label="Digite uma mensagem"][contenteditable="true"]';
    await page.click(messageBoxSelector);
    await page.type(messageBoxSelector, 'Reiniciar');
    // Simula a tecla Enter para enviar a mensagem
    await page.keyboard.press('Enter');
    // Aguarda 10 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Interagem com a listagem
    await page.type(messageBoxSelector, 'Selecionar consulta');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Clica na lista
    await page.click('[data-icon="list-msg-icon"]');
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Seleciona a opção "Consulta Básica"
    await page.click('svg.xrmlzy3.x1g2r6go.x18sm2im.xwji4o3.x16cd2qt');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Clica no botão de enviar
    await page.click('[data-icon="send"]');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 7000));

    // Informando a placa
    await page.type(messageBoxSelector, 'OPV6508');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 7000));
    // Confirmando se a placa está correta e Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 90000));
    console.log(`[${getCurrentTime()}] Fim da consulta básica com placa de Minas Gerais - OPV6508`);

    //------------------------------------------------------------------------------------

    // TESTE CONSULTA COMPLETA COM PLACA MINAS GERAIS - OPV6508
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Inicio da  consulta completa com placa de Minas Gerais - OPV6508`);
    // Digita a mensagem na caixa de mensagem
    await page.click(messageBoxSelector);
    await page.type(messageBoxSelector, 'Reiniciar');
    // Simula a tecla Enter para enviar a mensagem
    await page.keyboard.press('Enter');
    // Aguarda 10 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Interagem com a listagem
    await page.type(messageBoxSelector, 'Selecionar consulta');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Clica na lista
    await page.click('[data-icon="list-msg-icon"]');
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Seleciona a opção "Consulta Básica"
    await page.click('button[aria-label="2. Veículo Completa"]');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Clica no botão de enviar
    await page.click('[data-icon="send"]');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Informando a placa
    await page.type(messageBoxSelector, 'OPV6508');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 7000));
    // Confirmando se a placa está correta e Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 90000));
    console.log(`[${getCurrentTime()}] Fim da consulta completa com placa de Minas Gerais - OPV6508`);

    // --------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------

    // TESTE CONSULTA BÁSICA COM PLACA DE SÃO PAULO - FKV7195
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Inicio da  consulta básica com placa de SÃO PAULO - FKV7195`);
    // Digita a mensagem na caixa de mensagem
    await page.click(messageBoxSelector);
    await page.type(messageBoxSelector, 'Reiniciar');
    // Simula a tecla Enter para enviar a mensagem
    await page.keyboard.press('Enter');
    // Aguarda 10 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Interagem com a listagem
    await page.type(messageBoxSelector, 'Selecionar consulta');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Clica na lista
    await page.click('[data-icon="list-msg-icon"]');
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Seleciona a opção "Consulta Básica"
    await page.click('svg.xrmlzy3.x1g2r6go.x18sm2im.xwji4o3.x16cd2qt');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Clica no botão de enviar
    await page.click('[data-icon="send"]');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Informando a placa
    await page.type(messageBoxSelector, 'FKV7195');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 7000));
    // Confirmando se a placa está correta e Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 90000));
    console.log(`[${getCurrentTime()}] Fim da consulta básica com placa de SÃO PAULO - FKV7195`);

    //------------------------------------------------------------------------------------

    // TESTE CONSULTA COMPLETA COM PLACA DE SÃO PAULO - FKV7195
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Inicio da  consulta completa com placa de SÃO PAULO - FKV7195`);
    // Digita a mensagem na caixa de mensagem
    await page.click(messageBoxSelector);
    await page.type(messageBoxSelector, 'Ola');
    // Simula a tecla Enter para enviar a mensagem
    await page.keyboard.press('Enter');
    // Aguarda 10 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Interagem com a listagem
    await page.type(messageBoxSelector, 'Selecionar consulta');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Clica na lista
    await page.click('[data-icon="list-msg-icon"]');
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Seleciona a opção "Consulta Básica"
    await page.click('button[aria-label="2. Veículo Completa"]');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Clica no botão de enviar
    await page.click('[data-icon="send"]');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Informando a placa
    await page.type(messageBoxSelector, 'FKV7195');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 7000));
    // Confirmando se a placa está correta e Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 90000));
    console.log(`[${getCurrentTime()}] Fim da consulta COMPLETA com placa de SÃO PAULO - FKV7195`);

    // --------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------

    // TESTE CONSULTA BÁSICA COM PLACA DE SANTA CATARINA - QIX2252
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Inicio da  consulta básica com placa de SANTA CATARINA - QIX2252`);
    // Digita a mensagem na caixa de mensagem
    await page.click(messageBoxSelector);
    await page.type(messageBoxSelector, 'Ola');
    // Simula a tecla Enter para enviar a mensagem
    await page.keyboard.press('Enter');
    // Aguarda 10 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Interagem com a listagem
    await page.type(messageBoxSelector, 'Selecionar consulta');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Clica na lista
    await page.click('[data-icon="list-msg-icon"]');
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Seleciona a opção "Consulta Básica"
    await page.click('svg.xrmlzy3.x1g2r6go.x18sm2im.xwji4o3.x16cd2qt');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Clica no botão de enviar
    await page.click('[data-icon="send"]');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Informando a placa
    await page.type(messageBoxSelector, 'QIX2252');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 7000));
    // Confirmando se a placa está correta e Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 90000));
    console.log(`[${getCurrentTime()}] Fim da consulta básica com placa de SANTA CATARINA - QIX2252`);

    //------------------------------------------------------------------------------------

    // TESTE CONSULTA COMPLETA COM PLACA DE SANTA CATARINA - QIX2252
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Inicio da  consulta completa com placa de SANTA CATARINA - QIX2252`);
    // Digita a mensagem na caixa de mensagem
    await page.click(messageBoxSelector);
    await page.type(messageBoxSelector, 'Ola');
    // Simula a tecla Enter para enviar a mensagem
    await page.keyboard.press('Enter');
    // Aguarda 10 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Interagem com a listagem
    await page.type(messageBoxSelector, 'Selecionar consulta');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Clica na lista
    await page.click('[data-icon="list-msg-icon"]');
    await new Promise(resolve => setTimeout(resolve, 5000));


    // Seleciona a opção "Consulta Básica"
    await page.click('button[aria-label="2. Veículo Completa"]');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Clica no botão de enviar
    await page.click('[data-icon="send"]');
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Informando a placa
    await page.type(messageBoxSelector, 'QIX2252');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 7000));
    // Confirmando se a placa está correta e Digitando Sim
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 90000));
    console.log(`[${getCurrentTime()}] Fim da consulta COMPLETA com placa de SANTA CATARINA - QIX2252`);

    // --------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------

        // TESTE CONSULTA DE CPF
        console.log('------------------------------------------------------------------------');
        console.log(`[${getCurrentTime()}] Inicio da  consulta de CPF`);
        // Digita a mensagem na caixa de mensagem
        await page.click(messageBoxSelector);
        await page.type(messageBoxSelector, 'Ola');
        // Simula a tecla Enter para enviar a mensagem
        await page.keyboard.press('Enter');
        // Aguarda 10 segundos
        await new Promise(resolve => setTimeout(resolve, 5000));
    
    
        // Interagem com a listagem
        await page.type(messageBoxSelector, 'Selecionar consulta');
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 5000));
    
    
        // Clica na lista
        await page.click('[data-icon="list-msg-icon"]');
        await new Promise(resolve => setTimeout(resolve, 5000));
    
    
        // Seleciona a opção "Consulta Básica"
        await page.click('button[aria-label="3. Crédito CPF"]');
        await new Promise(resolve => setTimeout(resolve, 5000));
        // Clica no botão de enviar
        await page.click('[data-icon="send"]');
        await new Promise(resolve => setTimeout(resolve, 5000));
        // Digitando Sim
        await page.type(messageBoxSelector, 'Sim');
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 5000));
    
        // Informando a placa
        await page.type(messageBoxSelector, '12965139630');
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 7000));
        // Confirmando se a placa está correta e Digitando Sim
        await page.type(messageBoxSelector, 'Sim');
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 90000));
        console.log(`[${getCurrentTime()}] Fim da consulta de CPF`);

    // --------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------

        // TESTE CONSULTA DE CNPJ
        console.log('------------------------------------------------------------------------');
        console.log(`[${getCurrentTime()}] Inicio da  consulta de CNPJ`);
        // Digita a mensagem na caixa de mensagem
        await page.click(messageBoxSelector);
        await page.type(messageBoxSelector, 'Ola');
        // Simula a tecla Enter para enviar a mensagem
        await page.keyboard.press('Enter');
        // Aguarda 10 segundos
        await new Promise(resolve => setTimeout(resolve, 5000));
    
    
        // Interagem com a listagem
        await page.type(messageBoxSelector, 'Selecionar consulta');
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 5000));
    
    
        // Clica na lista
        await page.click('[data-icon="list-msg-icon"]');
        await new Promise(resolve => setTimeout(resolve, 5000));
    
    
        // Seleciona a opção "Consulta Básica"
        await page.click('button[aria-label="4. Crédito CNPJ"]');
        await new Promise(resolve => setTimeout(resolve, 5000));
        // Clica no botão de enviar
        await page.click('[data-icon="send"]');
        await new Promise(resolve => setTimeout(resolve, 5000));
        // Digitando Sim
        await page.type(messageBoxSelector, 'Sim');
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 5000));
    
        // Informando a CNPJ
        await page.type(messageBoxSelector, '45997418001710');
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 7000));
        // Confirmando se a placa está correta e Digitando Sim
        await page.type(messageBoxSelector, 'Sim');
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 90000));
        console.log(`[${getCurrentTime()}] Fim da consulta de CNPJ`);


    // Fechar o navegador após a automação
    await browser.close();
}, delay);
}

// Define o horário em que o script deve começar (formato HH:MM:SS)
const horarioDesejado = '16:18:00';
scheduleScript(horarioDesejado);