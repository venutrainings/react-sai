const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require('./Routes/AuthRoutes');
const cookieParser = require('cookie-parser');
const app = express();



app.listen(5000,()=>{
    console.log('server started on port 5000');
})
// Connect mongodb server..
mongoose.connect("mongodb://localhost:27017/jwt",{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("DB Connected successfully");
})
.catch((error)=>{
    console.log(error.message);
})

app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET", "POST"],
    credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use('/',authRoutes);