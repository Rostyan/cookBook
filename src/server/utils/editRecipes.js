const Reciepes = require('../model/recipes');

module.exports.patch = function (req, res) {

  let updatedOptions = {
    name: req.body.name,
    description: req.body.description,
    dateCreated: req.body.dateCreated
  };

  Reciepes.findOneAndUpdate({ _id: req.params.id }, { $set: updatedOptions }, function (error) {
    if (error) {
      res.send(error);
    } else {
      res.redirect('back')
    }
  });

};
