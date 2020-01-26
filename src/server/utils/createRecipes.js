const Reciepes = require('../model/recipes');

module.exports.post = (req, res) => {
  Reciepes.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
}