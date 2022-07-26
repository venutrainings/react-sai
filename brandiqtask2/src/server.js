  const express = require('express');
  const bodyParser = require('body-parser');
  const fs = require('fs');
  const morgan = require('morgan');
  const cors = require('cors');

  // declare the app
  const app = express();
  const port = 5000;

  //Miiddlewares
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());

  // declare default server route
  app.get('/',(req,res)=>
     res.status(200).send({
        message:'Server is Running..'
     })
  );

const WriteTextToFileAsync=(reqContent)=>{
    fs.writeFile('./data.json',reqContent,(err)=>{
        console.log(reqContent);
        if(err){
            console.log(err);
        } else{
            console.log('Done')
        }
    })
};



//Declare the posts / write to json 
app.post('/write', async (req,res,next)=>{
    // take the body from incomming request by req.body and convert string
    const reqContent=JSON.stringify(req.body);
     await WriteTextToFileAsync(reqContent);
})





  // 404 route server 
  app.use((req,res,next)=>
   res.status(404).send({
    message:'Could not find specified route that was requested..'
   })
  );

  // Run server 

  app.listen(port,()=>{
    console.log(
        `server is running
        listening for incomming requests on ports ${port}
        http://localhost:5000`
    )
  })