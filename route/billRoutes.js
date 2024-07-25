const express = require("express");
const {
  
  addbillController,
  getbillController,
  editBillController,
  deleteBillController // Import the delete controller

 
} = require("./../controller/billController");

const router = express.Router();
//get method
router.get("/get-bill", getbillController);

// POST method
router.post("/add-bill", addbillController);


;
//edit method
router.put("/edit-bill", editBillController);
// DELETE method to delete a bill
// Use a parameterized URL to accept the bill ID in the request URL
router.delete("/delete-bill/:id", deleteBillController);

module.exports = router;
