import pg from "pg";

const Database = async(dataDB) => {
  
    const pool = new pg.Pool({
      user: dataDB.user,
      host: dataDB.host,
      database: dataDB.database,
      password: dataDB.password,
      port: dataDB.port
    });
    // console.log(pool)
    return pool

};


export default Database;



