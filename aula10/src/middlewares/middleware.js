exports.middlewareGlobal = (req, res, next) => {
    if(req.body && req.body.nome) {
        console.log(`Vi que você postou ${req.body.nome}`);
    }
    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware')
}