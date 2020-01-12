const Reciepes = require('../model/recipes');

module.exports.get = (req, res) => {

  Reciepes.find({})
    .then(recipe => {
      res.send({ recipe: recipe });
    })
    .catch(err => res.send(err));

}