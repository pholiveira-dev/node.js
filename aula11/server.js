require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.emit('pronto');
})
.catch(e => console.log(e));

const routes = require('./routes');
const { middlewareGlobal } = require('./src/middlewares/middleware');
app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));
// o app.set foi add agora.
// Aqui eu tô dizendo pro express encontrar 'views', e uso path pra descrever as pastas até chegar na última pasta que leve a 'views'
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); //Essa 'view engine' vai permitir fazer um if, for e coisas do tipo dentro do HTML

// Nossos próprios Middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
    console.log('Servidor rodando...')
    console.log(`Servidor: http://localhost:3000`);
});
  
})
