const puppeteer = require('puppeteer');
const notifier = require('node-notifier');
const readlineSync = require('readline-sync');

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('pt-BR', { hour12: false });
}

async function iniciarConsulta(page, dado, tipoConsulta = 'básica') {
    console.log('------------------------------------------------------------------------');
    console.log(`[${getCurrentTime()}] Start da consulta ${tipoConsulta} com dado ${dado}`);

    const messageBoxSelector = 'div[contenteditable="true"][aria-placeholder="Digite uma mensagem"]';

    // Reiniciar o sistema
    await page.click(messageBoxSelector);
    await page.type(messageBoxSelector, 'REINICIAR');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 60000,));

    // Selecionar o tipo de consulta
    await page.type(messageBoxSelector, 'Selecionar consulta');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 60000));

    // Interagir com a lista de consultas
    await page.click('[data-icon="list-msg-icon"]');
    await new Promise(resolve => setTimeout(resolve, 60000));

    // Selecionar o tipo de consulta (básica ou completa)
    if (tipoConsulta === 'completa') {
        await page.click('button[aria-label="2. Veículo Completa"]');
    } else {
        await page.click('svg.xrmlzy3.x1g2r6go.x18sm2im.xwji4o3.x16cd2qt'); // Consulta básica
    }
    await new Promise(resolve => setTimeout(resolve, 60000));

    await page.click('[data-icon="send"]');
    await new Promise(resolve => setTimeout(resolve, 60000));

    // Enviar a confirmação "Sim"
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 60000));

    // Informar a dado
    await page.type(messageBoxSelector, dado);
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 60000));

    // Confirmar se a dado está correta
    await page.type(messageBoxSelector, 'Sim');
    await page.keyboard.press('Enter');
    await new Promise(resolve => setTimeout(resolve, 90000));

    console.log(`[${getCurrentTime()}] End da consulta ${tipoConsulta} com o dado ${dado}`);
}

(async () => {
    try {
        const dados = [
            { dado: 'SXL8G00', tipo: 'básica' },
            { dado: 'RYR1B10', tipo: 'completa' },
            { dado: 'RYE5H86', tipo: 'básica' },
            { dado: 'RYB8H47', tipo: 'completa' },
            { dado: 'RYB8747', tipo: 'básica' },
            { dado: 'RXX8I82', tipo: 'completa' },
            { dado: 'RXX8882', tipo: 'básica' },
            { dado: 'RXR1A88', tipo: 'completa' },
            { dado: 'RNE6I39', tipo: 'básica' },
            { dado: 'RLP7F88', tipo: 'completa' },
            { dado: 'RLG2C79', tipo: 'básica' },
            { dado: 'RLA5F60', tipo: 'completa' },
            { dado: 'RLC0C24', tipo: 'básica' },
            { dado: 'REA8I82', tipo: 'completa' },
            { dado: 'REA8B82', tipo: 'básica' },
            { dado: 'QJX6592', tipo: 'completa' },
            { dado: 'QJT6199', tipo: 'básica' },
            { dado: 'QJS1318', tipo: 'completa' },
            { dado: 'QJQ8182', tipo: 'básica' },
            { dado: 'QIY2252', tipo: 'completa' },
            { dado: 'QIX2C52', tipo: 'básica' },
            { dado: 'QIX2259', tipo: 'completa' },
            { dado: 'QIX2252', tipo: 'básica' },
            { dado: 'QIX2251', tipo: 'completa' },
            { dado: 'QIX2201', tipo: 'básica' },
            { dado: 'QIO2050', tipo: 'completa' },
            { dado: 'QIO2030', tipo: 'básica' },
            { dado: 'QIG4284', tipo: 'completa' },
            { dado: 'QIE2600', tipo: 'básica' },
            { dado: 'PYP0407', tipo: 'completa' },
            { dado: 'PQY8387', tipo: 'básica' },
            { dado: 'OPV9535', tipo: 'completa' },
            { dado: 'OPV6555', tipo: 'básica' },
            { dado: 'OPV6509', tipo: 'completa' },

        ];

        // Inicia o navegador
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.setViewport({ width: 800, height: 900, deviceScaleFactor: 1 });

        // Acessa o WhatsApp Web
        await page.goto('https://web.whatsapp.com/');
        await new Promise(resolve => setTimeout(resolve, 30000)); // Aguardar para conexão do WhatsApp
        console.log('------------------------------------------------------------------------');
        console.log(`[${getCurrentTime()}] Whatsapp Conectado com Sucesso!`);

        // Pesquisa o contato "Checkbot PROD"
        const contactName = "CheckBot PROD";
        await page.click('div[contenteditable="true"]');
        await page.type('div[contenteditable="true"]', contactName);
        await new Promise(resolve => setTimeout(resolve, 25000)); // Esperar a pesquisa
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 25000)); // Esperar contato abrir
        console.log(`[${getCurrentTime()}] Contato CheckBot PROD encontrado com Sucesso!`);

        // Iterar sobre a lista de dados e realizar as consultas
        for (let { dado, tipo } of dados) {
            await iniciarConsulta(page, dado, tipo);
        }
        // Loop infinito para repetir as consultas
        while (true) {
            // Iterar sobre a lista de dados e realizar as consultas
            for (let { dado, tipo } of dados) {
                await iniciarConsulta(page, dado, tipo);
            }

            console.log('------------------------------------------------------------------------');
            console.log(`[${getCurrentTime()}] Todas as consultas foram concluídas, reiniciando...`);
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
        notifier.notify({
            title: 'Erro no Puppeteer',
            message: 'Ocorreu um erro durante a execução do script.',
            sound: true,
        });
    }
})();
