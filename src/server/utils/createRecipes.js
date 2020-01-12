const Reciepes = require('../model/recipes');

module.exports.post = (req, res) => {
  Reciepes.create({
    name: req.body.name,
    description: req.body.description,
    dateCreated: req.body.dateCreated
  })
    .then(user => res.send('Рецепт успішно доданий до бази даних!'))
    .catch(err => res.send(err));
}