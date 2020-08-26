import express from 'express';

const routes = express.Router();

routes.get('/', (request, response)=> {
    return response.send("Universitool");
});

export default routes;