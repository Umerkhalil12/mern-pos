const express = require("express");
const { 
  loginController, 
  registerController, 
  resetPasswordController 
} = require("../controller/userController");

const router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);

router.post("/reset-password", resetPasswordController);

module.exports = router;
