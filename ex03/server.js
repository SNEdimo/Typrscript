const express = require('express')
const app = express();
const route

const port = 3000;

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.listen(port, () => {console.log(`Servidor rodando na porta ${port}`)})