const express = require('express');
const router = new express.Router();

const { GetTransactionsByAddress } = require('../Controllers/getTransactionsByAddress');
const { startEthPriceCollection, stopEthPriceCollection } = require('../Controllers/ethPriceStoreScheduler');
const getETHBalance = require('../Controllers/getETHBalance');

router.get('/getTransactionsByAddress/:walletAddress', GetTransactionsByAddress);
router.post('/startEthPriceCollection', startEthPriceCollection);
router.post('/stopEthPriceCollection', stopEthPriceCollection);
router.get('/getETHBalance/:walletAddress', getETHBalance);

module.exports = router;
