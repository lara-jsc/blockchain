const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express(); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res) => {
    res.status(404);
    res.send('<h1>Error 404: Resource not found </h1>');
})

app.listen(3000, () => {
    console.log("App listening on port 3000")
})



// Steps 
// 1. After creating app.js 
// 2. npm init -yy 
// 3. npm i express 
// 4. create public folder 
// 5. drop the html and css files in pub 
// 6. node app.js 
