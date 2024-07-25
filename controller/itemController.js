const itemModel = require("../models/itemModels");

// get items
const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

//add items
const addItemController = async (req, res) => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(201).send("Item Created Successfully!");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

//update item
const edititemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    await itemModel.findOneAndUpdate({ _id: itemId }, req.body);
    res.status(201).json("item Updated");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};
//delete update
const deleteitemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    await itemModel.deleteOne({ _id: itemId });
    res.status(201).json("item deleted");
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};



module.exports = { getItemController, addItemController, edititemController ,deleteitemController };