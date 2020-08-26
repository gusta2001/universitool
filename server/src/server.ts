import express from 'express';

const app = express();

app.get('/', (request, response)=> {
    response.json([
        "Organizadador da faculdalde",
        "Hello Thaisinha gameplays!!!",
        "Hello Gusta2001",
        "Agora esta funcionando o git",
    ]);
})

app.listen(3333);