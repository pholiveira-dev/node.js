const fs = require('fs').promises;

async function verificarTipo() {
    const stats = await fs.stat('./aula4');
    console.log('É arquivo? ', stats.isFile());
    console.log('É diretório? ', stats.isDirectory());
}

verificarTipo();