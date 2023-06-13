import express from "express";
import fs from "fs";
import { tbProducto } from "../database/models.js";
import {
    registrarUsuario,
    nuevoProducto,
    PersonaExiste,
    registrarPersona,
    articuloInfo,
    getAllProductos,
    getAllProductosFilter,
} from "../controllers/controllers.js";

import multer from "multer";
const upload = multer({ dest: "uploads/" });
const rutas = express.Router();

rutas.post("/registroUsuario/", registrarUsuario);
rutas.post("/PersonaExiste/", PersonaExiste);
rutas.post("/formularioPersona/", registrarPersona);
rutas.get("/ObtArtInfo/", articuloInfo);
rutas.get("/homeGetProd/", getAllProductos);
rutas.get("/filterGetProd/", getAllProductosFilter);

rutas.post("/InsertProducto/", upload.single("image"), async (req, res) => {
    // if (!req.file) {
    //     return res
    //         .status(400)
    //         .json({ error: "No se seleccionó ningún archivo" });
    // }
    const {
        detalle_Producto,
        categoria,
        descuento,
        talle,
        marca,
        genero,
        color,
        precio,
        cantidad,
    } = req.body;

    // console.log(
    //     "esto llego",
    //     detalle_Producto,
    //     categoria,
    //     descuento,
    //     talle,
    //     marca,
    //     genero,
    //     color,
    //     precio,
    //     cantidad,
    //     req.file
    // );
    const fileTempPath = req.file.path;
    const fileContent = fs.readFileSync(fileTempPath);
    try {
        const AddingProd = await tbProducto.create({
            Existencia_Producto: cantidad,
            Img_Producto: fileContent,
            Precio_Producto: precio,
            Detalle_Producto: detalle_Producto,
            fk_id_Color: color,
            fk_id_Genero: genero,
            fk_id_Marca: marca,
            fk_id_Talle: talle,
            fk_id_Descuento: descuento,
            fk_id_Categoria: categoria,
        });
        return res.json({ msg: "Se ha realizado con éxito" });
    } catch (err) {
        console.log(err);
        return res.json({ msgerr: "Error en el servidor" });
    }
    // const Producto = {
    //     detalle_Producto: req.body.values.detalle_Producto,
    //     categoria: parseInt(req.body.values.categoria),
    //     descuento: parseInt(req.body.values.descuento),
    //     talle: parseInt(req.body.values.talle),
    //     marca: parseInt(req.body.values.marca),
    //     genero: parseInt(req.body.values.genero),
    //     color: parseInt(req.body.values.color),
    //     precio: parseInt(req.body.values.precio),
    //     cantidad: parseInt(req.body.values.cantidad),
    //     image: req.file,
    // };
});

export default rutas;
