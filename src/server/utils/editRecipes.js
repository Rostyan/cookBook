const Reciepes = require('../model/recipes');

module.exports.put = function (req, res) {


  console.log('body ', req.body);

  Reciepes.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error) => {
    if(error){
      res.send(error);
    } else {
      res.redirect('back')
    }
  })

};
