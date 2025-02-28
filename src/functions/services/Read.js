const dsRead = async (json, clientBD) => {
  try {
    const client = await clientBD.connect();
    try {
      const query = 'SELECT * FROM "TABLETEST"';
      const result = await client.query(query);
      console.log(result.rows);
      return result.rows;
    } finally {
      client.release(); // Asegúrate de liberar el cliente después de la consulta
    }
  } catch (error) {
    console.log(error);
  }
};

export default dsRead;
