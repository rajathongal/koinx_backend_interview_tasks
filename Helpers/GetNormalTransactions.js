const axios = require('axios');
require('dotenv').config();

const _getNormalTransactions = async(currentBlock, walletAddress) => {
    try {
        const etherScanAPIKey = process.env.ETHERSCAN_API || '';
        const response = await axios.default.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=${currentBlock}&sort=asc&apikey=${etherScanAPIKey}`);
        return response.data.result;
        
    } catch(error) {
        throw new Error(error.message)
    }
};

module.exports = _getNormalTransactions;