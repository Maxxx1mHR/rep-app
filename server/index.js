const express = require('express');
const app = express();
const mysql = require("mysql");

app.listen(3001,()=>{
    console.log("running on port 3001");
});

app.get("/",(request,response)=>{
    response.send("HELLO");
});

const db = mysql.createConnection({

});