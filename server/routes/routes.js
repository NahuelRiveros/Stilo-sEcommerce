import express from "express";
import { registrarUsuario, nuevoProducto } from "../controllers/controllers.js";

const rutas = express.Router();

rutas.post("/registroUsuario/", registrarUsuario);
rutas.post("/InsertProducto/", nuevoProducto);

export default rutas;
