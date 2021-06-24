const Multimedia = require('../sequelize').Multimedia

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