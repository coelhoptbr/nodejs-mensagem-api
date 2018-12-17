const mongoose = require("mongoose");

const PostagemSchema = new mongoose.Schema({
    
    autor: String,
    
    conteudo: String,
    
    qtcurtida: {
        type: Number,
        default: 0
    },
    
    dataCriacao: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Postagem", PostagemSchema);