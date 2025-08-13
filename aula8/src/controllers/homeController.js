exports.paginaInicial = (req, res) => {
        res.render('index');
}

exports.Formulario = (req, res) => {
    res.send('Formulario recebido com sucesso')
}