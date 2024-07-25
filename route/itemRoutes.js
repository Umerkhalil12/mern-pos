const express = require("express");
const {
  getItemController,
  addItemController,
  edititemController,
  deleteitemController
} = require("./../controller/itemController");

const router = express.Router();

router.get("/get-item", getItemController);

router.post("/add-item", addItemController);

router.put("/edit-item", edititemController);

router.post("/delete-item", deleteitemController);

module.exports = router;
