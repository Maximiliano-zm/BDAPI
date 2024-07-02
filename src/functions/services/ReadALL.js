const dsReadAll = async (json, clientBD) => {
  try {
    const client = await clientBD.connect();

    try {
      // const query = 'SELECT * FROM "TABLETEST"';
      const result = await client.query(query);
      console.log(result.rows);
      return result.rows;
    } finally {
      client.release(); // liberar el cliente
    }
  } catch (error) {
    console.log(error);
  }
};

export default dsReadAll;
