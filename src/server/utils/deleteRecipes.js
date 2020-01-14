const Reciepes = require('../model/recipes');

module.exports.delete = function (req,res) {
  
  let id = req.body.id;

  Reciepes.remove({_id: id})
    .then(() => res.redirect('/'))
    .catch(err => res.send(err));
};