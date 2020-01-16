const Reciepes = require('../model/recipes');

module.exports.delete = function (req, res) {

  Reciepes.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
};