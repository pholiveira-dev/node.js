const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Enviar resposta</button>
        </form>`);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});