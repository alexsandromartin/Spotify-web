//Para rodar o servidor do back-end, execute o comando: node --watch ./api/server.js

import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = {
    ...currentArtistObj,
  };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongArray = songsArray.map((currentSongObj) => {
  const newSongObj = {
    ...currentSongObj,
  };
  delete newSongObj.id;

  return newSongObj;
});

const responseSongs = await db.collection("artists").insertMany(newArtistArray);
const responseArtists = await db.collection("songs").insertMany(newSongArray);

console.log(responseSongs);
console.log(responseArtists);
