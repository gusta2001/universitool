import express from 'express';

const routes = express.Router();

routes.get('/', (request, response)=> {
    return response.send("Universitool");
});

routes.get('/pdf', (request, response)=> {
    return response.send("Cortar PDF - Juntar pdf");
});

export default routes;