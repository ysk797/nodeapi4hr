//created to split app.js
import { app } from "./app";
import { connectdb } from "./data/database";
connectdb();//func. call
app.listen(process.env.PORT,()=>{
    console.log("Server is working");
    });