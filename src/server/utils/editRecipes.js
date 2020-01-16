const Reciepes = require('../model/recipes');

module.exports.post = function (req, res) {


    Reciepes.findOneAndUpdate({_id : req.params.id},req.body,{runValidators: true},(err,response)=>{
      if(err)
          res.status(500).json({message:{
              msgBody : "Unable to Update Employee",
              msgError : true
          }});
      else
      res.status(200).json({message:{
          msgBody: "Successfully Updated Employee",
          msgError : false
      }});   
  });



};
