const express =  require("express")
const upload =  require("../middleware/upload")
const User =  require("../model/User")
const router =  express.Router()
const usercontroller =  require("../controller/user_controller")

router.route("/register")
.post(upload.single("profile"),usercontroller.registeruser)

router.route("/login")
.post(usercontroller.loginuser)

module.exports =  router