import db from "./db.js";
import { DataTypes } from "sequelize";

const datosPermisos = [
    { id_PermisoUsuario: 1, Nivel_Permiso: 'Admin' }, { id_PermisoUsuario: 2, Nivel_Permiso: 'Empleado' }, { id_PermisoUsuario: 3, Nivel_Permiso: 'Usuario' }
]

const datosCategoria = [

]

const datosMarcas = [
    { Nom_Marca: 'Bando' }, { Nom_Marca: 'Bravo' }, { Nom_Marca: 'BBN' }, { Nom_Marca: 'Raiders' },
    { Nom_Marca: 'Taverniti' }, { Nom_Marca: 'Gell' }, { Nom_Marca: 'Beckon' }, { Nom_Marca: 'Maycla' },
    { Nom_Marca: 'Diosa' }, { Nom_Marca: 'USA' }, { Nom_Marca: 'Panther' }
]

const datosColores = [
    { Nom_Color: 'Rojo' }, { Nom_Color: 'Blanco' }, { Nom_Color: 'Negro' },
    { Nom_Color: 'Azul' }, { Nom_Color: 'Rosa' }, { Nom_Color: 'Verde' },
    { Nom_Color: 'Marron' }, { Nom_Color: 'Amarillo' }, { Nom_Color: 'Violeta' }
]

const datosGeneros = [
    { Genero_Producto: 'Hombres' }, { Genero_Producto: 'Mujeres' }, { Genero_Producto: 'Unisex' }
]

const datosTalles = [
    { Nom_Talle: 'S' }, { Nom_Talle: 'M' }, { Nom_Talle: 'L' }, { Nom_Talle: 'XL' }, { Nom_Talle: 'XXL' }
]

const datosDescuentos = [

]

export const tbPermisosUsers = db.define(
    "PermisoUsuario",
    {
        id_PermisoUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Nivel_Permiso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

export const tbColorProd = db.define(
    "Color_Producto",
    {
        id_Color: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Nom_Color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

export const tbGeneroProd = db.define(
    "Genero_Producto",
    {
        id_Genero: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Genero_Producto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

export const tbMarcaProd = db.define(
    "Marca_Producto",
    {
        id_Marca: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Nom_Marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

export const tbTalleProd = db.define(
    "Talle_Producto",
    {
        id_Talle: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Nom_Talle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

export const tbDescuentoProd = db.define(
    "Descuento_Producto",
    {
        id_Descuento: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Num_Descuento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

export const tbCategoriaProd = db.define(
    "Categoria_Producto",
    {
        id_Categoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Nom_Categoria: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

export const tbProducto = db.define(
    "Producto",
    {
        id_Producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Existencia_Producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Img_Producto: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        Precio_Producto: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        Detalle_Producto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fk_id_Color: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Color_Producto",
                key: "id_Color",
            },
        },
        fk_id_Genero: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Genero_Producto",
                key: "id_Genero",
            },
        },
        fk_id_Marca: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Marca_Producto",
                key: "id_Marca",
            },
        },
        fk_id_Talle: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Talle_Producto",
                key: "id_Talle",
            },
        },
        fk_id_Descuento: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Descuento_Producto",
                key: "id_Descuento",
            },
        },
        fk_id_Categoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Categoria_Producto",
                key: "id_Categoria",
            },
        },
    },
    { freezeTableName: true }
);

export const tbUsuario = db.define(
    "Usuario",
    {
        id_Usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            unique: true
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        fk_id_PermisoUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "PermisoUsuario",
                key: "id_PermisoUsuario",
            },
        },
    },
    { freezeTableName: true }
);

export const tbPersona = db.define(
    "Persona",
    {
        id_Persona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Segundo_Nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Apellido: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Localidad: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Provincia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Genero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Telefono: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fk_id_Usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Usuario",
                key: "id_Usuario",
            },
        }
    },
    { freezeTableName: true }
);

export const tbDomicilio = db.define(
    "Domicilio",
    {
        id_Domicilio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Calle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Departamento: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Piso: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Num_Casa: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Barrio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Codigo_Postal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fk_id_Persona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Persona",
                key: "id_Persona",
            },
        },
    },
    { freezeTableName: true }
);

export const tbCarrito = db.define(
    "Carrito",
    {
        id_Carrito: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Estado_Cuenta: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        fk_id_Usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Usuario",
                key: "id_Usuario",
            },
        },
    },
    { freezeTableName: true }
);

export const tbCarritoDetalle = db.define(
    "Carrito_Detalle",
    {
        id_Carrito_Detalle: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Cantidad_Productos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Precio_Total: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        Fecha_Agregado: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fk_id_Carrito: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Carrito",
                key: "id_Carrito",
            },
        },
        fk_id_Producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Producto",
                key: "id_Producto",
            },
        },
    },
    { freezeTableName: true }
);

//Relaciones

//PermisoUsuario a Usuario

tbUsuario.belongsTo(tbPermisosUsers, {
    foreignKey: { name: "fk_id_PermisoUsuario" },
});
tbPermisosUsers.hasMany(tbUsuario, {
    foreignKey: { name: "fk_id_PermisoUsuario" },
});

//Persona a Usuario

tbPersona.belongsTo(tbUsuario, { foreignKey: { name: "fk_id_Usuario" } });
tbUsuario.hasOne(tbPersona, { foreignKey: { name: "fk_id_Usuario" } });

//Domicilio a Persona

tbDomicilio.belongsTo(tbPersona, { foreignKey: { name: "fk_id_Persona" } });
tbPersona.hasOne(tbDomicilio, { foreignKey: { name: "fk_id_Persona" } });

//Usuario a Carrito

tbCarrito.belongsTo(tbUsuario, { foreignKey: { name: "fk_id_Usuario" } });
tbUsuario.hasOne(tbCarrito, { foreignKey: { name: "fk_id_Usuario" } });

//Carrito a Carrito_Detalle

tbCarritoDetalle.belongsTo(tbCarrito, {
    foreignKey: { name: "fk_id_Carrito" },
});
tbCarrito.hasMany(tbCarritoDetalle, { foreignKey: { name: "fk_id_Carrito" } });

//Producto a Carrito_Detalle

tbCarritoDetalle.belongsTo(tbProducto, {
    foreignKey: { name: "fk_id_Producto" },
});
tbProducto.hasMany(tbCarritoDetalle, {
    foreignKey: { name: "fk_id_Producto" },
});

//Relaciones para el filtro de productos

tbProducto.belongsTo(tbColorProd, { foreignKey: { name: "fk_id_Color" } });
tbColorProd.hasMany(tbProducto, { foreignKey: { name: "fk_id_Color" } });

tbProducto.belongsTo(tbGeneroProd, { foreignKey: { name: "fk_id_Genero" } });
tbGeneroProd.hasMany(tbProducto, { foreignKey: { name: "fk_id_Genero" } });

tbProducto.belongsTo(tbMarcaProd, { foreignKey: { name: "fk_id_Marca" } });
tbMarcaProd.hasMany(tbProducto, { foreignKey: { name: "fk_id_Marca" } });

tbProducto.belongsTo(tbTalleProd, { foreignKey: { name: "fk_id_Talle" } });
tbTalleProd.hasMany(tbProducto, { foreignKey: { name: "fk_id_Talle" } });

tbProducto.belongsTo(tbDescuentoProd, {
    foreignKey: { name: "fk_id_Descuento" },
});
tbDescuentoProd.hasMany(tbProducto, {
    foreignKey: { name: "fk_id_Descuento" },
});

tbProducto.belongsTo(tbCategoriaProd, {
    foreignKey: { name: "fk_id_Categoria" },
});
tbCategoriaProd.hasMany(tbProducto, {
    foreignKey: { name: "fk_id_Categoria" },
});

tbProducto.belongsTo(tbCategoriaProd, { foreignKey: { name: 'fk_id_Categoria' } });
tbCategoriaProd.hasMany(tbProducto, { foreignKey: { name: 'fk_id_Categoria' } });



//tbPermisosUsers.bulkCreate(datosPermisos)
//tbMarcaProd.bulkCreate(datosMarcas)
//tbColorProd.bulkCreate(datosColores)
//tbGeneroProd.bulkCreate(datosGeneros)
//tbTalleProd.bulkCreate(datosTalles)

const crearPermisosDefault = datosPermisos.map((permiso) => {
    return tbPermisosUsers.findOrCreate({
        where: { Nivel_Permiso: permiso.Nivel_Permiso },
        defaults: permiso
    });
});

Promise.all(crearPermisosDefault)
    .then((results) => {
        console.log('Registros creados exitosamente.');
    })
    .catch((error) => {
        console.error('Error al buscar o crear los registros:', error);
    });

const crearCategoriasDefault = datosCategoria.map((categoria) => {
    return tbCategoriaProd.findOrCreate({
        where: { Nom_Categoria: categoria.Nom_Categoria },
        defaults: categoria
    });
});

Promise.all(crearCategoriasDefault)
    .then((results) => {
        console.log('Registros creados exitosamente.');
    })
    .catch((error) => {
        console.error('Error al buscar o crear los registros:', error);
    });

const crearMarcasDefault = datosMarcas.map((marca) => {
    return tbMarcaProd.findOrCreate({
        where: { Nom_Marca: marca.Nom_Marca },
        defaults: marca
    });
});

Promise.all(crearMarcasDefault)
    .then((results) => {
        console.log('Registros creados exitosamente.');
    })
    .catch((error) => {
        console.error('Error al buscar o crear los registros:', error);
    });

const crearColoresDefault = datosColores.map((color) => {
    return tbColorProd.findOrCreate({
        where: { Nom_Color: color.Nom_Color },
        defaults: color
    });
});

Promise.all(crearColoresDefault)
    .then((results) => {
        console.log('Registros creados exitosamente.');
    })
    .catch((error) => {
        console.error('Error al buscar o crear los registros:', error);
    });

const crearGenerosDefault = datosGeneros.map((genero) => {
    return tbGeneroProd.findOrCreate({
        where: { Genero_Producto: genero.Genero_Producto },
        defaults: genero
    });
});

Promise.all(crearGenerosDefault)
    .then((results) => {
        console.log('Registros creados exitosamente.');
    })
    .catch((error) => {
        console.error('Error al buscar o crear los registros:', error);
    });

const crearTallesDefault = datosTalles.map((talle) => {
    return tbTalleProd.findOrCreate({
        where: { Nom_Talle: talle.Nom_Talle },
        defaults: talle
    });
});

Promise.all(crearTallesDefault)
    .then((results) => {
        console.log('Registros creados exitosamente.');
    })
    .catch((error) => {
        console.error('Error al buscar o crear los registros:', error);
    });