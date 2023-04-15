var cron = require('node-cron'); 
const _getETHPrice = require('../Helpers/GetEthPrice');
const ETHPricesStore = require('../Models/EthPricesStore');
const { nanoid } = require('nanoid');

const startEthPriceCollection = async(request, response) => {
    try {
        var task = cron.schedule('*/10 * * * *', async() => {
            const ethPriceInINR = await _getETHPrice()
            await ETHPricesStore.create({
                _id: nanoid(),
                inr: ethPriceInINR
            });
        }, {
            scheduled: false
        });

        await task.start();

        return response.status(200).json({
            sucess: true,
            message: "Eth Price collection Job Started"
        });
    } catch(error) {
        return response.status(500).json({
            sucess: false,
            error: error.message
        })
    }
};

const stopEthPriceCollection = async(request, response) => {
    try {
        await cron.getTasks().forEach((task) => task.stop());
        return response.status(200).json({
            sucess: true,
            message: "Eth Price collection Job Stopped"
        });
    } catch(error) {
        return response.status(500).json({
            sucess: false,
            error: error.message
        })
    }
};

module.exports = {
    startEthPriceCollection,
    stopEthPriceCollection
}