const express =require("express")
const { registerUser, loginUser,getAllUsers } =require("../controllers/AuthController.js");
const cors =require("cors")
const router=express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/allusers").post(getAllUsers)
module.exports=router