class Pessoa {
    constructor (nome) {
        this.nome = nome;
    }
    falaOi() {
        console.log(`Oi, ${this.nome}`);
    }
};

module.exports = Pessoa;