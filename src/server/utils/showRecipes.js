const Reciepes = require('../model/recipes');

module.exports.get = (req, res) => {

  Reciepes.find((error, products) => {
    if (error) {
      return next(error)
    } else {
      res.send({data});
    }
  })

}