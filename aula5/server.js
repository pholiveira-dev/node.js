const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});

app.listen(3000, () => {
    console.log('Rodando o servidor...');
    console.log('Servidor disponível em: http://localhost:3000');
})