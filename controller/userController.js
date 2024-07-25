const userModel = require("../models/userModels");

const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;

    const user = await userModel.findOne({ userId });

    if (!user) {
      return res.status(401).send("User not found");
    }

    if (user.password === password) {
      return res.status(200).send("Login success");
    } else {
      return res.status(401).send("Incorrect password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send("New user added successfully!");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error: " + error.message);
  }
};

const resetPasswordController = async (req, res) => {
  try {
    const { userId, name, newPassword } = req.body;

    if (!userId || !name || !newPassword) {
      return res.status(400).send("User ID, name, and new password are required");
    }

    const user = await userModel.findOne({ userId, name });

    if (!user) {
      return res.status(404).send("User not found");
    }

    user.password = newPassword;
    await user.save();

    res.status(200).send("Password reset successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = {   loginController,   registerController,  resetPasswordController, };
