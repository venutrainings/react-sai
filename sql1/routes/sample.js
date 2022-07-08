var express = require('express');
var router= express.Router();
var mysql = require('mysql');
// url : http://localhost:2022/sample/

// create connection 
  var  con = mysql.createConnection({
    port:3306,
    database:'users',
    user:'root',
    password:'',
    host:'localhost'
});
// connect with db
 con.connect(function(err){
    if(err) throw err;
    console.log('connected!1');
    // create database 
    //var q = "CREATE DATABASE users";
    // create Table;
    // var q = "CREATE TABLE students (id INT, name VARCHAR(250), rno VARCHAR(250), address VARCHAR(250))"
    /*insert into database */
    // var q = "INSERT INTO students (id,name,rno,address) VALUES('3','SURYA','04','GANGAVARAM')"
    /*select data from the table like get method */
   //  var q = " SELECT * FROM students ";
    /* select from table with where you want to filter the existing data */
   // var q = "SELECT * FROM students WHERE name = 'PUSAM'";

   /* ORDER BY its select the data ascending or descending order */
    //var q = "SELECT * FROM students ORDER BY address"
   
   /* DELETE FROM THE TABLE */ 
   // var q = "DELETE FROM students WHERE address = 'GAN' "

   /* delete the table using DROP TABLE */
    //var q = 'DROP TABLE user';
    /* DROP TABLE IF EXISTS */
    //var q = "DROP TABLE IF EXISTS user"

    /*update the table*/ 
   // var q =  "UPDATE students SET address = 'LOVE YOU' WHERE address='kusumanapally'";
  /* LIMIT THE TABLE DATA IN THE return the data by using SELECT and LIMIT */
    //var q = "SELECT * FROM students LIMIT 5 ";

    /* OFFSET start from the another Position */
     // var q = "SELECT * FROM students LIMIT 2 OFFSET 2"
     // var q = "SELECT * FROM students LIMIT 2,5"

     /*JOIN */
  // var q = "SELECT students.name As student_name,category.name As category_name FROM students JOIN category ON students.address = category.id "
 // var q = "INSERT INTO product (name,product_id) VALUES('vinay','4')"


// q = "SELECT product.name AS product_name,category.name AS category_name FROM product JOIN category ON product.product_id=category.id"

//var q = "DELETE FROM students WHERE rno = '04' "
    con.query(q,function(e,s){
        if(e) throw e;
       // console.log('TABLE is created');
        // console.log('1 record is inserted..')
       // console.log("HOW MANY records ARE DELETED " + s.affectedRows);
     // console.log('table is deleted ' ,s)
      // console.log('the table row is updated ' + s.affectedRows);
      console.log(s);
    })
 })

module.exports = router;