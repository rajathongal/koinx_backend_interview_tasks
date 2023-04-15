const Transactions = require('../Models/Transactions');
const ethers = require('ethers');
const _getETHPrice = require('../Helpers/GetEthPrice');

const getETHBalance = async(request, response) => {

    try {
        const walletAddress = request.params.walletAddress;
        if (!(walletAddress !== null && walletAddress !== ":walletAddress")) {
            return response.status(404).json({
                success: false,
                message: "Please provide valid values for walletAddress" 
            });
        }
        const isWalletAddressValid = await ethers.isAddress(walletAddress);
        if(!isWalletAddressValid) {
            return response.status(400).json({
                sucess: false,
                reason: "Provided Wallet Address is not a valid Ethereum address"
            });
        }
        
        const toTransactionResponse = Transactions.aggregate([{
                $match: {
                     to: walletAddress
                }
            },
            {
                $group: {
                    _id: null,
                    sum: {
                        $sum: {
                            "$toDouble": "$value"
                        }
                    }
                }
            }
        ]);

        const fromTransactionResponse = Transactions.aggregate([{
                $match: {
                    from: walletAddress
                }
            },
            {
                $group: {
                    _id: null,
                    sum: {
                        $sum: {
                            "$toDouble": "$value"
                        }
                    }
                }
            }
        ]);
        const getCurrentETHPriceResponse = _getETHPrice();

        const [toBalance, fromBalance, currentETHPrice] = await Promise.all([toTransactionResponse, fromTransactionResponse, getCurrentETHPriceResponse]);

        if(!(toBalance.length == 0 && fromBalance.length == 0)) {
            const total = toBalance[0].sum - fromBalance[0].sum;
            const valueOfBalanceININR = parseFloat(ethers.formatEther(`${total}`)) * currentETHPrice;

            return response.status(200).json({
                balance: ethers.formatEther(`${total}`) + " ETH",
                balanceValueINR: valueOfBalanceININR,
                currentETHPrice: currentETHPrice
            });
        } else {
            return response.status(200).json({
                sucess: true,
                message: `Address ${walletAddress} is not synchronized`
            })
        }
    } catch(error) {
        return response.status(500).json({
            sucess: false,
            error: error.message
        });
    }
};

module.exports = getETHBalance;