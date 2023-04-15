const express = require('express');
const router = new express.Router();

const { GetTransactionsByAddress } = require('../Controllers/getTransactionsByAddress');
const { startEthPriceCollection, stopEthPriceCollection } = require('../Controllers/ethPriceStoreScheduler');

router.get('/getTransactionsByAddress/:walletAddress', GetTransactionsByAddress);
router.post('/startEthPriceCollection', startEthPriceCollection);
router.post('/stopEthPriceCollection', stopEthPriceCollection);

module.exports = router;
