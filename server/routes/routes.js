import express from "express";
import {
    registrarUsuario,
    nuevoProducto,
    PersonaExiste,
    registrarPersona,
    articuloInfo,
    getAllProductos,
} from "../controllers/controllers.js";

const rutas = express.Router();

rutas.post("/registroUsuario/", registrarUsuario);
rutas.post("/PersonaExiste/", PersonaExiste);
rutas.post("/formularioPersona/", registrarPersona);
rutas.post("/InsertProducto/", nuevoProducto);
rutas.get("/ObtArtInfo/", articuloInfo);
rutas.get("/homeGetProd/", getAllProductos)

export default rutas;
