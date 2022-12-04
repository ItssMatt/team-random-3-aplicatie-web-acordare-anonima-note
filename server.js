const http = require('http');
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();


app.use(express.json());
app.use(express.static("express"));
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
  });

const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "baza"
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);