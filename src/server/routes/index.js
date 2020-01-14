var express = require('express');
var router = express.Router();

const Reciepes = require('../model/recipes');


const createRecipes = require('../utils/createRecipes')
const editRecipes = require('../utils/editRecipes')
const deleteRecipes = require('../utils/deleteRecipes')


router.get(`/api/`, async (req, res) => {
    let recipe = await Reciepes.find();
    return res.status(200).send(recipe);
  });

router.post('/createRecipes', createRecipes.post);

router.patch('/:id',editRecipes.patch);

router.delete("/delete", deleteRecipes.delete);


module.exports = router;
