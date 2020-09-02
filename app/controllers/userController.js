const User = require("../models/user");

const userController = {
    loginPlayer: async (req, res) => {

        const user = await User.findOne({
            where: {
                mail: req.body.mail,
                pwd: req.body.pwd
            }
        });

        if (!user) {
            console.log("l'utilisateur n'a pas pu se connecter");
            return;
        }

        //on va s'ocupper de crypter le mdp ici
        // code à venir...

        // On stocke notre utilisateur en session
        req.session.user = user;

        // faire expirer la session au bout d'une heure
        if (req.body.remember) {
            req.session.cookie.expires = new Date(Date.now() + 60 * 60 * 1000);
        }

        delete user.dataValues.pwd;
        console.log(user.dataValues);

        res.json(user.dataValues);

    },

    checkIflogged: (req, res) => {
        const user = req.session.user;

        if (!user) {
            //redirect vers connexion
        }

        //res.json(user.dataValues);
    }
};

module.exports = userController;




