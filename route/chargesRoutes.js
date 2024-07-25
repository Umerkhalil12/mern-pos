const express = require("express");
const router = express.Router();
const {
    getAllCharges,
    addCharge,
    updateCharge,
    deleteCharge,
} = require("./../controller/chargesController");

// Route to get all charges
router.get("/get-charges", getAllCharges);

// Route to add a new charge
router.post("/add-charge", addCharge);

// Route to update an existing charge
router.put("/edit-charge", updateCharge);

// Route to delete a charge
router.post("/delete-charge",deleteCharge);

module.exports = router;
