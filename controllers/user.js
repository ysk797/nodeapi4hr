import {User} from "../models/user.js";

export const getallusers = async(req,res)=>{
    const users = await User.find({})//gives us all the users. If i wrote User.find({name:"Abhi"}),then users meh we get all users with name abhi
    console.log(req.query);
    res.json({
        success:true,
        users,
    });
};

export const register = async(req,res)=>{

    const{name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,

    }); // we can create our own users
    res.status(201).cookie("tempi","lol").json({     //cookie created with var name tempi and value lol and status is 201 this all can be seen on postman
        success:true,
        message:"registered successfully",
});
};

export const getuserdetails=async(req,res)=>{//userid is static id uske baad ka part it will treat as id 
    const{id}=req.params;
    const user=await User.findById(id);//question mark keh baad wala part in key value pairs
    
    res.json({
        success:true,
        user,
});
}