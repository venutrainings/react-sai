var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* UPDATE: */
 router.put('/update',function(req,res,next){
    // create connection with db
     var con = mysql.createConnection({
      port:3306,
      host:'localhost',
      database:'school',
      user:'root',
      password:''
     });

     // take data from req

      var u = req.body.uid;
       var id = req.body.id;
       var p = req.body.pwd;
       var a = req.body.address;

     con.connect(function(err){
          if(err){
            res.send('db con is failure');
          } else{
             var q="UPDATE user SET uid ='"+u+"', pwd ='"+p+"', address ='"+a+"' where id="+id;
            con.query(q,function(e,s){
              if(e){    
                res.send(e);
              } else{
                res.send(s);
                console.log(s);
              }
            })
          }
     })
 });

 

/* delete */
// router.delete('/reg-user',function(req,res,next){
//     // create connection with db
//      var con = mysql.createConnection({
//        host:'localhost',
//        port:3306,
//        user:'root',
//        password:'',
//        database:'school'
//      });

//      // take the data from the req
//        var id = req.body.id;
//        // connect with db
//        con.connect(function(err){
//           if(err){
//             res.send('db con is failed');
//               } else{
//                 var q="DELETE FROM user WHERE `user`.`id` = 3 ";
//                 con.query(q,function(e,s){
//                 if(e){
//                   res.send(e);
//                 } else{
//                   res.send(s);
//                   console.log('deleted',s);
//                 }
//                 })
//               }
//        })

// });

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   //res.send('respond with a resource');
//   var con = mysql.createConnection({
//     host:'localhost',
//     port:3306,
//     user:'root',
//     password:'',
//     database:'school'
// });
//   con.connect(function(err){
//     if(err){
//       res.send('DB connection is failed')
//     }
//    else{
//       var q = "SELECT * FROM `user` WHERE 1";
    
//       con.query(q,function(e,s){
//          if(e){
//           res.send(e);
//          } else{
//            res.send(s);
//            //console.log(s);

//          }
//       })
//   }
     
  
//   }
//   )

// });


router.post('/reg-user',function(req,res,next){
 // res.send('response with endpoint ...')
  // take data from the request
  var u = req.body.uid;
  var p = req.body.pwd;
  var a = req.body.add;
  // connect  with db
 var con = mysql.createConnection({
  host:'localhost',
  port:3306,
  user:'root',
  password:'',
  database:'school'

 })
 // perform some operations 

 con.connect(function(err){
   if(err){
    console.log('db connection is failed')
   } else{
    var q = " INSERT INTO `user`( `uid`, `pwd`, `address`) VALUES ('"+u+"','"+p+"','"+a+"')"
    con.query(q,function(e,s){
      if(e){
        res.send(e)
      } else{
        res.send(s)
      }
    })
   }
 })

})
module.exports = router;
//  insert record to database: 
// url : http://localhost:2022/users/reg-user
// method: 'post'
// INSERT INTO `user`(`id`, `uid`, `pwd`, `address`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')