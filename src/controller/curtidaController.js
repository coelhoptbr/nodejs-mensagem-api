const Postagem = require("../model/postagem");

module.exports = {

    async salvar(req, res) {
        const postagem = await Postagem.findById(req.params.idpost);
        postagem.set({qtcurtida: postagem.qtcurtida + 1});
        await postagem.save();
        req.io.emit("novaCurtida", postagem);
        return res.json(postagem);
    }

}