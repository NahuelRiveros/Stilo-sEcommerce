import express from "express";
import { registrarUsuario, nuevoProducto, PersonaExiste, registrarPersona } from "../controllers/controllers.js";

const rutas = express.Router();

rutas.post("/registroUsuario/", registrarUsuario);
rutas.post("/PersonaExiste/", PersonaExiste);
rutas.post("/formularioPersona", registrarPersona)
rutas.post("/InsertProducto/", nuevoProducto);

export default rutas;
