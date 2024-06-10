import express from "express";

import {getallusers} from "../controllers/user.js";
import {register} from "../controllers/user.js";
import {getuserdetails} from "../controllers/user.js";
//importing the user.js file from models folder
const router=express.Router();
router.get("/all",getallusers);
router.post("/new",register);

router.get("/userid/:id",getuserdetails);


export default router;
