const Dealer = require("./../models/dealerModels");

const getAllDealers = async (req, res) => {
  try {
    const dealers = await Dealer.find();
    res.json(dealers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch dealers' });
  }
};

const addDealer = async (req, res) => {
  const { dealerName, contactName, shopName, address, products } = req.body;
  
  try {
    const newDealer = new Dealer({
      dealerName,
      contactName,
      shopName,
      address,
      products
    });
    await newDealer.save();
    res.status(201).json(newDealer);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add dealer' });
  }
};

const getDealerById = async (req, res) => {
  const { id } = req.params;

  try {
    const dealer = await Dealer.findById(id);
    if (dealer) {
      res.json(dealer);
    } else {
      res.status(404).json({ message: 'Dealer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch dealer' });
  }
};

const updateDealerById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedDealer = await Dealer.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedDealer) {
      res.json(updatedDealer);
    } else {
      res.status(404).json({ message: 'Dealer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update dealer' });
  }
};

const deleteDealerById = async (req, res) => {
  const { dealerId } = req.body;

  try {
    const deletedDealer = await Dealer.findByIdAndDelete(dealerId);
    if (deletedDealer) {
      res.json({ message: 'Dealer deleted successfully' });
    } else {
      res.status(404).json({ message: 'Dealer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete dealer' });
  }
};

module.exports = {
  getAllDealers,  addDealer,  getDealerById,  updateDealerById,  deleteDealerById, 
};
