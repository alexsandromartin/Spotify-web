//Instalar o npm init -y
//Ir no terminal e digitar: npm install express
//Ir no arquivo package.json e adicionar o ""type": "module"

//Quando for colocar o servidor no ar coloque o comando "node --watch com o caminho do servidor para que ele fique monitorando as alterações sem precisar ficar reiniciando o servidor"

import express from "express";
import { db } from "./connect.js";
import cors from "cors"; //Middleware que permite que a API seja acessada por qualquer domínio

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`SERVIDOR ESTÁ ESCUTANDO NA PORTA ${{ PORT }}`);
});
