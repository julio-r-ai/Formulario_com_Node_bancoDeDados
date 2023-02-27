const express = require('express');
const mysql = require('mysql');

const app = express();

//Crinado a conecxão com banco de dados
let connetion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'users'
});

connetion.connect((err)=>{
    if(err){
        console.log('error connecting: ' + err.stack);
    }
});


app.get('/', (req, res)=>{
    res.send('pagina home')
});

app.get('/contato', (req, res)=>{
    res.send('Pagina contato')
});

app.get('/listagem', (req, res)=>{
    res.send('Pagina de listagem')
});

app.listen(3000, ()=>{
    console.log('SEVIDOR RODANDO...')
});