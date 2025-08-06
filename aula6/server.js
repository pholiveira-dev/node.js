const express = require('express');
const app = express();

app.use(
    express.urlencoded( 
        { 
            extended: true 
        }
    )
)

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes{/:id}{/:parametro}', (req, res) => {
    res.send(req.query);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Recebi o formulario de ${req.body.nome}`);
})

app.get('/testes/{:idUsuarios}/{:parametro}', (req, res) => {
    console.log(req.params);
    res.send(`${idUsuarios}`)
    res.send(req.params);
});

app.listen(3000, () => {
    console.log('Servidor rodando...')
    console.log(`Servidor: http://localhost:3000`);
});
