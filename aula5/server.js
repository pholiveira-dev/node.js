const express = require('express');
const app = express();

app.get('./', (req, res) => {
    res.send('Seja muito bem-vindo(a)');
})

app.post('./contato', (req, res) => {
    res.send('Agora funcionou?');
})

app.listen(3000, () => {
    console.log('Para acessar o servidor: http://localhost:3000');
    console.log('Acessando o servidor pela porta 3000');
})