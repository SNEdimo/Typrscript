const express = require('express')
const app = express();

const port = 3000;

app.listen(port, () => {console.log(`Servidor rodando na porta ${port}`)})

app.get('/', (req, ans) => {
    ans.send('hello world');
});

app.get('/testes/:idUsuario?/:nome?', (req, ans) => {
    console.log(req.params);
    ans.send(req.params.idUsuario);
});