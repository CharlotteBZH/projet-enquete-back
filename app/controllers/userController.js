const User = require("../models/user");

const userController = {
    loginPlayer: async (req, res) => {
        console.log(req);
        const user = await User.findOne({
            where: {
                //pseudo: req.body.pseudo,
                mail: req.body.mail,
                pwd: req.body.pwd
            }
        });

        if (!user) {
            return res.render('signin', {
                error: "Cet email n'existe pas"
            });
        }
        delete user.dataValues.pwd;
        console.log(user.dataValues);
        res.json(user.dataValues);

        // faire expirer la session au bout d'une heure
        if (req.body.remember) {
            req.session.cookie.expires = new Date(Date.now() + 60 * 60 * 1000);
        }


    }
};

module.exports = userController;




