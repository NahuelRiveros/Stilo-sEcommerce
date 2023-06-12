import express from "express";
import {
    registrarUsuario,
    nuevoProducto,
    PersonaExiste,
    registrarPersona,
    articuloInfo,
} from "../controllers/controllers.js";

const rutas = express.Router();

rutas.post("/registroUsuario/", registrarUsuario);
rutas.post("/PersonaExiste/", PersonaExiste);
rutas.post("/formularioPersona/", registrarPersona);
rutas.post("/InsertProducto/", nuevoProducto);
rutas.get("/ObtArtInfo/", articuloInfo);

export default rutas;
