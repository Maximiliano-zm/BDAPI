
import dataServices from './functions/controller/controller.js';
import { app } from "@azure/functions";

app.setup({
    enableHttpStream: true,
});

app.http('index', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const json = request.query.get('json') || (await request.json());
        const respuesta = await dataServices(json);
        
        if (respuesta == undefined) {
            return {status: 400 , jsonBody: {error : "error"}};
        } else {
            return { body: respuesta };
        }
    }
});
