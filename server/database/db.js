import Sequelize from 'sequelize';

const db = new Sequelize ('Stilos', 'Pruebas', '123456789', {
  host: 'localhost',
  dialect:'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


//Sincronizar base de datos

db.sync({alter: true})

export default db;