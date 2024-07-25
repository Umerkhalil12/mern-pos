const express = require('express');
const {
  getAllDealers,
  addDealer,
  getDealerById,
  updateDealerById,
  deleteDealerById
} = require('./../controller/dealerController');

const router = express.Router();

router.get('/get-dealers', getAllDealers);

router.post('/add-dealer', addDealer);

router.put('/edit-dealer', updateDealerById);

router.post('/delete-dealer', deleteDealerById);

module.exports = router;
