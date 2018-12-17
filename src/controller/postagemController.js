const Postagem = require("../model/postagem");

module.exports = {

    async listarTemporalmente(req, res) {
        const listaPostagens = await Postagem.find({}).sort("-dataCriacao");
        return res.json(listaPostagens);
    },

    async incluir(req, res) {
        const novaPostagem = await Postagem.create(req.body);
        req.io.emit("novaPostagem", novaPostagem);
        return res.json(novaPostagem);
    }
}