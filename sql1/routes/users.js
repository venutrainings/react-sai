var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
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