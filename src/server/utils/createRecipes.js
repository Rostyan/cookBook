const Reciepes = require('../model/recipes');

module.exports.post = (req, res) => {
  Reciepes.create({
    name: req.body.name,
    description: req.body.description,
    datecreated: req.body.datecreated
  })
    .then(() => res.redirect('back'))
    .catch(err => res.send(err));
}