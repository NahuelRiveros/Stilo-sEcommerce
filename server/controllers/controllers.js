import {
    tbUsuario,
    tbPersona,
    tbDomicilio,
    tbProducto,
    tbMarcaProd,
    tbTalleProd,
    tbColorProd,
    tbCategoriaProd,
    tbGeneroProd,
    tbDescuentoProd,
} from "../database/models.js";

export const registrarUsuario = async (req, res) => {
    try {
        const { id, email } = req.body;

        const existeUsuario = await tbUsuario.findOne({
            where: { id_Usuario: id },
        });

        if (existeUsuario) {
            res.json({ msg: "el usuario ya existe", exist: "True" });
        } else {
            const creadoUsuario = await tbUsuario.create({
                id_Usuario: id,
                Email: email,
                fk_id_PermisoUsuario: 3,
            });
            res.json({ msg: "Creado correctamente" });
        }
    } catch (err) {
        res.json({ error: err.message });
    }
};

export const PersonaExiste = async (req, res) => {
    try {
        const { id } = req.body;

        const existePersona = await tbPersona.findOne({
            where: { fk_id_Usuario: id },
        });

        if (existePersona) {
            res.json({ exist: "Esta persona existe" });
        } else {
            res.json({ no: "esta persona no existe" });
        }
    } catch (err) {
        res.json({ error: err.message });
    }
};

export const registrarPersona = async (req, res) => {
    console.log(req.body.values);
    try {
        const {
            nombreUno,
            nombreDos,
            apellido,
            localidad,
            provincia,
            generoPers,
            numeroCel,
        } = req.body.values;
        const { barrio, calle, numCasa, departamento, numPiso, codPostal } =
            req.body.values;

        const { id } = req.body;
        const crearPersona = await tbPersona.create({
            Nombre: nombreUno,
            Segundo_Nombre: nombreDos,
            Apellido: apellido,
            Localidad: localidad,
            Provincia: provincia,
            Genero: generoPers,
            Telefono: numeroCel,
            fk_id_Usuario: id,
        });
        const Persona = await tbPersona.findAll({
            where: { fk_id_Usuario: id },
        });

        const [objPersona] = Persona;
        const { id_Persona } = objPersona.dataValues;
        console.log(id_Persona);

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
        return res.json({ msgerr: "Error en el servidor", msgerr2 });
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

export const articuloInfo = async (req, res) => {
    const marca = await tbMarcaProd.findAll();
    const talle = await tbTalleProd.findAll();
    const color = await tbColorProd.findAll();
    const categoria = await tbCategoriaProd.findAll();
    const genero = await tbGeneroProd.findAll();
    const descuento = await tbDescuentoProd.findAll();

    return res.json({ marca, talle, color, categoria, genero, descuento });
};
