const axios = require('axios');

const _getETHPrice = async() => {
    try {
        const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&amp;vs_currencies=inr';
        const response = await axios.default.get(url);
        return response.data.ethereum.inr;
    } catch(error) {
        throw new Error(error.message);
    }
};

module.exports = _getETHPrice;
