import {
    tbUsuario,
    tbPersona,
    tbDomicilio,
    tbProducto,
} from "../database/models.js";

export const registrarUsuario = async (req, res) => {
    try {
        // const { id, email:req.body. } = req.body;
        const nahuel = { id: req.body.id, email: req.body.email };
        console.log(nahuel);
        const creadoUsuario = await tbUsuario.create({
            id_Usuario: id,
            Email: email,
            fk_id_PermisoUsuario: 3,
        });
        res.json({ msg: "Creado correctamente" });
    } catch (err) {
        res.json({ error: err.message });
    }
};

export const registrarPersona = async (req, res) => {
    try {
        const {
            nombreUno,
            nombreDos,
            apellido,
            localidad,
            provincia,
            generoPers,
            numeroCel,
        } = req.body;
        const { barrio, calle, numCasa, departamento, numPiso, codPostal } =
            req.body;
        const { uuid } = req.body;
        const crearPersona = await tbPersona.create({
            Nombre: nombreUno,
            Segundo_Nombre: nombreDos,
            Apellido: apellido,
            Localidad: localidad,
            Provincia: provincia,
            Genero: generoPers,
            Telefono: numeroCel,
            fk_id_Usuario: uuid,
        });
        const Persona = await tbPersona.findAll({
            where: { fk_id_Usuario: uuid },
        });
        const { id_Persona } = Persona;
        const crearDomicilio = await tbDomicilio.create({
            Calle: calle,
            Departamento: departamento,
            Piso: numPiso,
            Num_Casa: numCasa,
            Barrio: barrio,
            Codigo_Postal: codPostal,
            fk_id_Persona: id_Persona,
        });
        return res.json({ msg: "Se ha realizado con éxito" });
    } catch (err) {
        console.log(err);
        return res.json({ msgerr: "Error en el servidor" });
    }
};

export const nuevoProducto = async (req, res) => {
    try {
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
            image,
        } = req.body;

        const AddingProd = await tbProducto.create({
            Existencia_Producto: cantidad,
            Img_Producto: image,
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
};

export const listaMarcas = async (req, res) => {};
