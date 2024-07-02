import CreatedFN from "../services/Create.js";
import ReadFN from "../services/Read.js";
import ReadALLFN from "../services/ReadALL.js"
import UpdateFN from "../services/Update.js";
import DeleteFN from "../services/Delete.js";
import DataBaseFn from "../config/Database.js"

const Controller = async (req) => {
  try {
    const json = req;
    const typeEvent = json["TypeEvent"];
    const dataDB = json["db"];
    //en caso de que sea solicitado
    const queryData = json["Query"];

    console.log(queryData);

    const clientBD = await DataBaseFn(dataDB);
    // console.log(connectOpen)
    switch (typeEvent) {
      case "CREATE":
        // const reqCreate = await CreatedFN(json);
      case "READ":
        // const reqRead = await ReadFN(json,clientBD);
        break;
        case "READALL":
        const reqReadALL = await ReadALLFN(json,clientBD);
        // return reqReadALL;
        break;
      case "UPDATE":
        // const reqUpdate = await UpdateFN(json);
        break;
      case "DELETE":
        // const reqDelete = await DeleteFN(json);
        break;
    }
  } catch (error) {
    console.error(error);
  }
};

export default Controller;
