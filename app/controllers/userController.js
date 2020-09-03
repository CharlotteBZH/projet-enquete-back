const User = require("../models/user");
const emailValidator = require('email-validator');

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

    logonPlayer: (request, response) => {
        console.log(request);
        const pseudo = request.body.pseudo;
        const mail = request.body.mail;
        const checkMail = request.body.checkMail;
        const pwd = request.body.pwd;
        const checkPwd = request.body.checkPwd;

        // je teste que les valeurs obligatoire soient bien définis
        if (!(pseudo && mail && checkMail && pwd && checkPwd)) {
            console.log('Un champs est manquant');
            console.log('pseudo', pseudo);
            console.log('mail', mail);
            console.log('checkMail', checkMail);
            console.log('pwd', pwd);
            console.log('checkPwd', checkPwd);
            return;
        }

        User.findOne({
            where: {
                mail
            }
        }).then(user => {
            if (user) {
                console.log('Ce mail est déjà relié à un compte');
                return;
            }

            if (mail !== checkMail) {
                console.log('les 2 mails ne correspondent pas');
                return;
            }

            if (pwd !== checkPwd) {
                console.log('les 2 mots de passe ne sont pas identiques');
                return;
            }

            if (!emailValidator.validate(mail)) {
                console.log("L'email saisie n'est pas valide");
                return;
            }

            let newUser = new User({
                pseudo,
                mail,
                pwd
            });

            newUser.save().then(() => {
                console.log('nouveau joueur enregistré');
            });

            // On stocke notre utilisateur en session
            request.session.user = user;

            // faire expirer la session au bout d'une heure
            if (request.body.remember) {
                request.session.cookie.expires = new Date(Date.now() + 60 * 60 * 1000);
            }


            console.log(user);

            response.json(user);
        })

    },

    logoutPlayer: (request, response) => {
        try {
            if (!request.session) {
                console.log("impossible de déconnecter quelqu'un non loggué")
            } else {
                request.session.destroy();
                response.clearCookie('connect.sid'); // effacer le cookie du client
                return response.status(200).json('Successful logout');
            }

        } catch (err) {
            response.status(500).json(error.toString());
        }
    }
};

module.exports = userController;