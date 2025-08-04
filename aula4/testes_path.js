const fs = require('fs').promises;
const path = require('path');

const caminhoCompleto = path.join(__dirname, 'pasta', 'msg.txt');

const nomeArquivo = path.basename('./aula4/pqp/msg.txt', '.txt');

const extensao = path.extname('foto.png');

const caminhoAbsoluto = path.resolve('aula5', 'msg.txt');

