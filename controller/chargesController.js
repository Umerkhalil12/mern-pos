const Charge = require("../models/chargesModels");

// Get all charges
const getAllCharges = async (req, res) => {
  try {
    const charges = await Charge.find();
    res.status(200).json(charges);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch charges" });
  }
};

// Add a new charge kartay hovey
const addCharge = async (req, res) => {
  const { description, amount } = req.body;

  try {
    const newCharge = new Charge({ description, amount });
    await newCharge.save();

    res.status(201).json(newCharge);
  } catch (error) {
    res.status(500).json({ error: "Failed to add charge" });
  }
};

// Update kartay hovy old charges 
const updateCharge = async (req, res) => {
  const { chargeId, description, amount } = req.body;

  try {
    const updatedCharge = await Charge.findByIdAndUpdate(
      chargeId,
      { description, amount },
      { new: true }
    );

    res.status(200).json(updatedCharge);
  } catch (error) {
    res.status(500).json({ error: "Failed to update charge" });
  }
};

// Delete a charge kara tay hovay 
const deleteCharge = async (req, res) => {
  const { chargeId } = req.body;

  try {
    await Charge.findByIdAndDelete(chargeId);
    res.status(200).json({ message: "Charge deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete charge" });
  }
};

module.exports = {
  getAllCharges,  addCharge, updateCharge, deleteCharge, };
