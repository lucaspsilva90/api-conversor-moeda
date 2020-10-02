const { Transaction } = require('../models');

module.exports = {

    //This method will persist all transaction data in database
    
    //This method will return all transactions made by an user
    listByUserId: async (req, res) => {
        let { userId } = req.params
        try {
            let result = await Transaction.findAll({ where: { id: userId } });
            return res.json(result);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}