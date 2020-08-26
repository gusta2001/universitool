import express from 'express';

const app = express();

app.get('/', (request, response)=> {
    response.json([
        "Organizadador da faculdalde",
        "Hello Thaisinha gameplays!!!",
        "Hello Gusta14",
    ]);
})

app.listen(3333);