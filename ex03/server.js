const express = require('express')
const app = express();
const routes = require('./routes');
const path = require('path')
const sql = require('mssql');

const port = 3000;

const config = {
    user: 'jorge',
    password: '123',
    server: 'localhost',
    database: 'teste_js',
    options: {
        encrypt: true
    }
};
const pool = new sql.ConnectionPool(config);
pool.connect().then(() => {
    console.log(`Conectado com o banco de dados!`);
}).catch(e => {
    console.log(`erro ao conectar no banco de dados\n${e}`)
});


app.use(routes);
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.listen(port, () => {console.log(`Servidor rodando na porta ${port}`)});