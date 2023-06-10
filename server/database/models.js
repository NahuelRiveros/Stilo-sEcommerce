import db from 'db.js';
import { DataTypes } from 'sequelize';

export const tbPermisosUsers = db.define('PermisoUsuario', {
    id_PermisoUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Nivel_Permiso: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    { freezeTableName: true });

export const tbColorProd = db.define('Color_Producto', {
    id_Color: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Nom_Color: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    { freezeTableName: true });

export const tbGeneroProd = db.define('Genero_Producto', {
    id_Genero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Genero_Producto: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    { freezeTableName: true });

export const tbMarcaProd = db.define('Marca_Producto', {
    id_Marca: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Nom_Marca: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    { freezeTableName: true });

export const tbTalleProd = db.define('Talle_Producto', {
    id_Talle: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Nom_Talle: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    { freezeTableName: true });

export const tbDescuentoProd = db.define('Descuento_Producto', {
    id_Descuento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Num_Descuento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
    { freezeTableName: true });

export const tbCategoriaProd = db.define('Categoria_Producto', {
    id_Categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Nom_Categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    { freezeTableName: true });

export const tbProducto = db.define('Producto', {
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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Precio_Producto: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    Categoria_Producto: {
        type: DataTypes.INTEGER,
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
            model: 'Color_Producto',
            key: 'id_Color'
        }
    },
    fk_id_Genero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Genero_Producto',
            key: 'id_Genero'
        }
    },
    fk_id_Marca: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Marca_Producto',
            key: 'id_Marca'
        }
    },
    fk_id_Talle: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Talle_Producto',
            key: 'id_Talle'
        }
    },
    fk_id_Descuento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Descuento_Producto',
            key: 'id_Descuento'
        }
    },
    fk_id_Categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categoria_Producto',
            key: 'id_Categoria'
        }
    }
},
    { freezeTableName: true });

export const tbDomicilio = db.define('Domicilio', {
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
    }
},
    { freezeTableName: true });

export const tbPersona = db.define('Persona', {
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
    fk_id_Domicilio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Domicilio',
            key: 'id_Domicilio'
        }
    }
},
    { freezeTableName: true });

export const tbUsuario = db.define('Usuario', {
    id_Usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Estado_Cuenta: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Historial_Compra: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fk_id_PermisoUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'PermisoUsuario',
            key: 'id_PermisoUsuario'
        }
    },
    fk_id_Persona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Persona',
            key: 'id_Persona'
        }
    }
},
    { freezeTableName: true });

export const tbCarrito = db.define('Carrito', {
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
            model: 'Usuario',
            key: 'id_Usuario'
        }
    },
},
    { freezeTableName: true });

export const tbCarritoDetalle = db.define('Carrito_Detalle', {
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
            model: 'Carrito',
            key: 'id_Carrito'
        }
    },
    fk_id_Producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Producto',
            key: 'id_Producto'
        }
    }
},
    { freezeTableName: true });


//Relaciones

//PermisoUsuario a Usuario

tbUsuario.belongsTo(tbPermisosUsers, { foreignKey: { name: 'fk_id_PermisoUsuario' } })
tbPermisosUsers.hasMany(tbUsuario, { foreignKey: { name: 'fk_id_PermisoUsuario' } })

//Persona a Usuario

tbUsuario.belongsTo(tbPersona, { foreignKey: { name: 'fk_id_Persona' } })
tbPersona.hasOne(tbUsuario, { foreignKey: { name: 'fk_id_Persona' } })

//Domicilio a Persona

tbPersona.belongsTo(tbDomicilio, { foreignKey: { name: 'fk_id_Domicilio' } })
tbDomicilio.hasOne(tbPersona, { foreignKey: { name: 'fk_id_Domicilio' } })

//Usuario a Carrito

tbCarrito.belongsTo(tbUsuario, { foreignKey: { name: 'fk_id_Usuario' } })
tbUsuario.hasOne(tbCarrito, { foreignKey: { name: 'fk_id_Usuario' } })

//Carrito a Carrito_Detalle

tbCarritoDetalle.belongsTo(tbCarrito, { foreignKey: { name: 'fk_id_Carrito' } })
tbCarrito.hasMany(tbCarritoDetalle, { foreignKey: { name: 'fk_id_Carrito' } })

//Producto a Carrito_Detalle

tbCarritoDetalle.belongsTo(tbProducto, { foreignKey: { name: 'fk_id_Producto' } });
tbProducto.hasMany(tbCarritoDetalle, { foreignKey: { name: 'fk_id_Producto' } });

//Relaciones para el filtro de productos

tbProducto.belongsTo(tbColorProd, { foreignKey: { name: 'fk_id_Color' } });
tbColorProd.hasMany(tbProducto, { foreignKey: { name: 'fk_id_Color' } });

tbProducto.belongsTo(tbGeneroProd, { foreignKey: { name: 'fk_id_Genero' } });
tbGeneroProd.hasMany(tbProducto, { foreignKey: { name: 'fk_id_Genero' } });

tbProducto.belongsTo(tbMarcaProd, { foreignKey: { name: 'fk_id_Marca' } });
tbMarcaProd.hasMany(tbProducto, { foreignKey: { name: 'fk_id_Marca' } });

tbProducto.belongsTo(tbTalleProd, { foreignKey: { name: 'fk_id_Talle' } });
tbTalleProd.hasMany(tbProducto, { foreignKey: { name: 'fk_id_Talle' } });

tbProducto.belongsTo(tbDescuentoProd, { foreignKey: { name: 'fk_id_Descuento' } });
tbDescuentoProd.hasMany(tbProducto, { foreignKey: { name: 'fk_id_Descuento' } });

tbProducto.belongsTo(tbCategoriaProd, { foreignKey: { name: 'fk_id_Categoria' } });
tbCategoriaProd.hasMany(tbProducto, { foreignKey: { name: 'fk_id_Categoria' } });