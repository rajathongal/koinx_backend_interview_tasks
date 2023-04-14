const express = require('express');
const router = new express.Router();

const { GetTransactionsByAddress } = require('../Controllers/getTransactionsByAddress');

router.get('/getTransactionsByAddress/:walletAddress', GetTransactionsByAddress);

module.exports = router;
