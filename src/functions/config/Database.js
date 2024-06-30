// const { Pool } = require("pg");

const Database = (dataDB) => {

  console.log(dataDB)

  const pool = new Pool({
    user: dataDB.user,
    host: dataDB.host,
    database: dataDB.database,
    password: dataDB.password,
    port: dataDB.port,
  });

  // return pool
};

export default Database;
