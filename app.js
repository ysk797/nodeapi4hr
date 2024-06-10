import express from "express";
import userrouter from "./routes/user.js"
import { config } from "dotenv";//importing file
export const app=express();
config({
   path:"./data/confif.env",
});

app.use(express.json());
app.use("/users",userrouter);//coz we are directly putting in json data in postman

//user ki jagah u can write anything dw

app.get("/",(req,res)=>{
    res.send("Nice working");
});

    

//nodemon i C:\Users\yuvra\OneDrive\Desktop\nodeAPI\app.js yeh likh dena
//dynamic url iss seh id daalke we get everything of that paticu user


