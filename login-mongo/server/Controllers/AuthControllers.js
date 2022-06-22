const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const maxAge = 30*24*60*60;

const createToken = (id) =>{
    return jwt.sign({id},"pusam saikumar secret key",{
        expiresIn : maxAge,
    });
}
const handleErrors = (err) =>{
    let errors = {email:"",password:""};
    if(err.message === 'incorrect email'){
        errors.email = " That Email is not registered"
    }
    if(err.message === 'incorrect password'){
        errors.password = " That Password is incorrect"
    }
    if(err.code === 11000){
        errors.email = "Email is Already Registered";
        return errors;
    }
    if(err.message.includes("Users Validation Failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}
module.exports.register = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const user = await UserModel.create({email,password});
        const token = createToken(user._id);
        res.cookie("jwt",token,{
            withCrdentials:true,
            httpOnly:false,
            maxAge:maxAge*1000
        });
        res.status(201).json({user:user._id,created:true});
    }catch(err){
        console.log(err);
        const errors = handleErrors(err);
        res.json({
            errors,created:false
        })
    }
};

module.exports.login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const user = await UserModel.login(email,password);
        const token = createToken(user._id);
        res.cookie("jwt",token,{
            withCrdentials:true,
            httpOnly:false,
            maxAge:maxAge*1000
        });
        res.status(200).json({user:user._id,created:true});
    }catch(err){
        console.log(err);
        const errors = handleErrors(err);
        res.json({
            errors,created:false
        })
    }
};
