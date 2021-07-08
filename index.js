const { create } = require('@open-wa/wa-automate');
const express = require('express');

function createClient() {
    return create({
        sessionId: 'TOKO_PROXY',
        authTimeout: 0,
        qrFormat: 0,
        headless: true,
    });
}

(async () => {
    const client = await createClient();

    client.onMessage((msg) => {
        const content = msg.content;
    
        if (content === 'ping') {
            client.sendText(msg.from, 'pong');
        }
    });    
})();
