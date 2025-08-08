exports.paginaInicial = (req, res) => {
        res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
}

exports.Formulario = (req, res) => {
    res.send('Formulario recebido com sucesso')
}