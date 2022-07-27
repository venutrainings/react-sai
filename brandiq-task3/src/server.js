const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');

// declare the app
const app = express();
const port = 4000;
app.listen(port,()=>console.log('app is running.....'))

//Miiddlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

 app.get('/',(req,res) => res.status(200).send({
    messaga:'Server is running....'
 }));




 app.post('/write',async(req,res,next)=>{
    const reqContent = JSON.stringify(req.body);
    await WriteTextToFileAsync(reqContent)
 })
 app.use((req,res,next)=> res.status(404).send({
    message:'Could Not Find the specified router that was requested..'
 }));

 const WriteTextToFileAsync=(reqContent)=>{
    fs.writeFile('./data.json',reqContent,(err)=>{
        console.log(reqContent);
        if(err){
            console.log(err);
        } else{
            console.log('Done');
        }
    })
 }
 
