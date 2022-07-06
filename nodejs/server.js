// var http = require('http');
// var dt = require('./myFirstModule');

// // file system module
// var fs = require('fs');

// // // http module
// // http.createServer((req,res)=>{
// //     // http module:

// //     //res.write('Hellow world');
// //     //res.write(req.url)

// //     // file system module: 

// //     // fs.readFile('test.txt',(err,data)=>{

// //         // fs.appendFile('test.txt','hi this is surya.. Grace',(err,data)=>{
// //         //     res.write(data);
// //         //     res.end();
// //         //     console.log('server is running....')
// //         // })
// //         // override with existing data old data is replaced with new data

// //         //write header
// //         res.write(req.url)
// //         res.writeHead(200, {'Content-Type': 'text/html'});
// //         res.write('current data and time: ' + dt.myDateTime());
// //         res.end();

// //         // fs.writeFile('test.txt','over ride with existing data',(err,data)=>{
// //         //         res.write(data);
// //         //         res.end();
// //         //         console.log('server runing');
// //         // })
// //      }) .listen(8080);

// // delete file
// http.createServer((req,res)=>{
//     fs.unlink('test.txt',(err)=>{
//         if(err){
//             throw err;
//         }
//         console.log('file deleted ');
//     })
// }).listen(8080);

// url modules:

var url = require('url');
var adrs = 'http://localhost:8080/home.html?year=2022&month=june';
 // parse address
  var q = url.parse(adrs,true);
  console.log(q.host) // return host: localhost:8080
  console.log(q.pathname) // return pathname: /home.html
  console.log(q.search)  // return s object : ?year=2022&month=june

  var qdata = q.query;
  console.log(qdata.month) // return query parameters value month key : june
  console.log(qdata.year) // return query parameters value of 2022 of year propertie