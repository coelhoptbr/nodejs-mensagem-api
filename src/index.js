const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");

const porta = process.env.PORT || 3232;
const conStrBd = "mongodb://admin:admin@cluster0-shard-00-00-mpeik.gcp.mongodb.net:27017,cluster0-shard-00-01-mpeik.gcp.mongodb.net:27017,cluster0-shard-00-02-mpeik.gcp.mongodb.net:27017/cursogoweek?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";  


mongoose.connect(conStrBd, { useNewUrlParser: true});

app.use((req, res, next) => {
    req.io = io;

    return next();
})


app.use(express.json());
app.use(cors());
app.use(require("./rotas"));

server.listen(porta, () => {
    console.log(process.env);
    console.log(`API iniciada na porta ${porta}`);
});