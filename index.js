const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


// app.use(express.static(__dirname+'/public'));

app.get('',(req, res)=>{
    res.render(__dirname+"/public/index.html");
})


app.get('*', (req, res)=>{
     res.sendFile(__dirname+"/public/error_404.html")}
);
    


app.listen(port, (err)=>{
    try{
      console.log("Listen");
    }catch(err){
        console.log(err);
    }
    
})
























// const fs = require('fs');
// const path = require('path');
// const http = require('http');
// const arr = require('./data.js');


// http.createServer((req, res)=>{

//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("hi");

//     res.end();

// }).listen(3000)
// const dname = path.join(__dirname, 'files/');


// // arr.forEach((filenames)=>{
// //     fs.writeFileSync(dname + filenames.name,filenames.content);
// // });


