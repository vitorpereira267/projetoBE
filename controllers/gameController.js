const Game = require('../sequelize').Game

exports.getGame = function (req, res, next) {
    Game.findAll()
        .then(result => {
            res.send(result);
        })
}

exports.getGameID = function (req, res, next) {
    Game.findAll({
        where: { game_ID: req.params.game_ID }
    })
        .then(result => {
            res.send(result)
        }).catch(err => {
            console.error("No game found", err)
        })
}
