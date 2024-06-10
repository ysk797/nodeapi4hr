import mongoose from "mongoose";
//mongoose.connect("mongodb://localhost:27017",{
//   dbname : "backendapi" ,
//}).then(()=>console.log("database connected"))
//.catch((e)=>console.group(e));
//yeh wale part ko we wrap in function
export const connectdb= ()=>{
    mongoose.connect(process.env.MONGO_URI,{
           dbname : "backendapi" ,
        }).then(()=>console.log("database connected"))
        .catch((e)=>console.group(e));
        
};