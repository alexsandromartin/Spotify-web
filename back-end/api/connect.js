// Async/await no JavaScript serve para lidar com operações assíncronas (que demoram algum tempo para concluir) de um jeito mais simples e parecido com código normal (síncrono).

// Função async:
// Indica que a função vai lidar com operações assíncronas e retorna sempre uma Promise.

// Palavra-chave await:
// Só pode ser usada dentro de uma função async. Ela “pausa” a execução até que a Promise termine (resolva ou rejeite). É como se o código “esperasse” o resultado antes de continuar, mas sem bloquear o resto do sistema.

import { MongoClient } from "mongodb";

const URL = process.env.MONGODB_URI; // Use uma variável de ambiente

if (!URL) {
  throw new Error("A variável de ambiente MONGODB_URI não está definida.");
}

const client = new MongoClient(URL);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray()

// console.log(songCollection)
