const { Transaction } = require('../models');
const calculateTransaction = require('../util/converter');


module.exports = {

    //This method will persist all transaction data in database
    store: async (req, res) => {
        try {

            const id_user = req.params.userId;
            const { origin_currency, target_currency, origin_value } = req.body;
            const result = await calculateTransaction(origin_currency, target_currency, origin_value);
            const exchange_rate = result.exchangeRate;
            const target_value = result.result

            transaction = await Transaction.create({ id_user, origin_currency, target_currency, origin_value, target_value, exchange_rate });
            res.status(200).json(transaction);

            if (!result) {
                res.status(401).json({ message: "Something went wrong." });
            }

        } catch (error) {
            return res.status(500).json(error.message);
        }

    },
    //This method will return all transactions made by an user
    listByUserId: async (req, res) => {
        let { userId } = req.params
        try {
            let result = await Transaction.findAll({ where: { id_user: userId } });
            return res.json(result);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}