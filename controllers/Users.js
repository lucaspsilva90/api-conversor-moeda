const { User } = require('../models');

module.exports = {
    store: async (req, res) =>{
        try {
            let {name, email} = req.body

            if (await User.findOne({where:{email}})){
                return res.status(400).json({message:"This email is already used."})
            }
            if(name == "" || email == ""){
                return res.status(400).json({message:"Name and e-mail must be filled."})
            }

            const user = await User.create({name,email});
            res.status(201).json(user);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    },
    list: async (req, res) => {
        try {
            let resultado = await User.findAll();

            if(!resultado){
                return res.status(404).json({message:"There is no users to list."})
            }
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}