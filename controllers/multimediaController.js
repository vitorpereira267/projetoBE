const Multimedia = require('../sequelize').Multimedia


exports.getMultimedia = function (req, res, next) {
    Multimedia.findOne({
        where:
        {
            game_ID: req.params.game_ID
        }
    }).then(result => {
        res.send({ result })
    }).catch(err => {
        console.error("Nothing found", err)
    })

exports.getImages = function (req, res, next) {
    Multimedia.findOne({
        where:{
            game_ID: req.params.game_ID
        }
    })
        .then(result => {
            res.json(result);
        })
    }