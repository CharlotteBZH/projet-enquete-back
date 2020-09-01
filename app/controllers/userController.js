const User = require("../models/user");

const userController = {
    loginPlayer: async (req, res) => {
        console.log(req);
        const user = await User.findOne({
            where: {
                pseudo: 'player',
                mail: "player@gmail.com",
                pwd: "1234"
            }
        });

        if (!user) {
            return response.render('signin', {
                error: "Cet email n'existe pas"
            });
        }
        delete user.dataValues.pwd;
        console.log(user.dataValues);
        res.json(user.dataValues);
    }

};

module.exports = userController;




