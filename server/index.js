const express = require('express');
const app = express();
const mysql = require("mysql");


//Запуск сервера на порту 3001?
app.listen(3001,()=>{
    console.log("running on port 3001");
});

//конфигурация базы данных
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "testcrudapp"
});


// тестирование подключения к базе данных
db.connect((err)=>{
   if(err){
       return console.error("Error: " + err.message);
   }
   else {
       console.log("Connection to DataBase is successful!");
   }
});


//Выполнение ответов сервера
app.get("/",(request,response)=>{

});

