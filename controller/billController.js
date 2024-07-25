const billModel = require("../models/billaModels");
const getbillController = async (req, res) => {
  try {
    const bills = await billModel.find();
    res.status(200).send(bills);
  } catch (error) {
    console.log(error);
  }
};

const addbillController = async (req, res) => {
  try {
    const newBill = new billModel(req.body);
    await newBill.save();
    res.status(201).json({ message: "Bill Created Successfully", data: newBill });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editBillController = async (req, res) => {
  try {
      const { billId, ...updatedBillData } = req.body;
// Ensure the bill
      if (!billId) {
          return res.status(400).json({ error: "Bill ID is required" });
      }
      const updatedBill = await billModel.findByIdAndUpdate(
          billId,
          updatedBillData,
          { new: true } 
      );
      
      // Check if the bill was found and updated
      if (!updatedBill) {
          return res.status(404).json({ error: "Bill not found" });
      }
      
      // Return a success message and the updated bill data
      res.status(200).json({ message: "Bill updated successfully", data: updatedBill });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteBillController = async (req, res) => {
  try {
      // Get the bill ID from the request body or URL parameters
      const billId = req.params.id || req.body.billId;

      // Ensure bill ID is provided
      if (!billId) {
          return res.status(400).json({ error: "Bill ID is required" });
      }

      // Find the bill by ID and delete it
      const deletedBill = await billModel.findByIdAndDelete(billId);

      // Check if the bill was found and deleted
      if (!deletedBill) {
          return res.status(404).json({ error: "Bill not found" });
      }

      // Return a success message
      res.status(200).json({ message: "Bill deleted successfully", data: deletedBill });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addbillController ,getbillController,editBillController, deleteBillController};
