const { User } = require('../models');

module.exports = {

    listaClientes: async (req, res) => {
        try {
            let resultado = await User.findAll();
            return res.json(resultado);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}