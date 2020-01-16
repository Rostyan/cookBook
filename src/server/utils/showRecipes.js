const Reciepes = require('../model/recipes');

module.exports.get = (req, res) => {

  Reciepes.find((error, data) => {
    if (error) {
      return send(error)
    } else {
      res.json(data)
    }
  })

}