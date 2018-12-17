const express = require("express");

const rotas = express.Router();

const postagemController = require("./controller/postagemController");
const curtidaController = require("./controller/curtidaController");

rotas.get("/postagens", postagemController.listarTemporalmente);

rotas.post("/postagens", postagemController.incluir);

rotas.post("/curtida/:idpost", curtidaController.salvar);

module.exports = rotas;