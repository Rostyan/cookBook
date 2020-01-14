var express = require('express');
var router = express.Router();

const Reciepes = require('../model/recipes');

const createRecipes = require('../utils/createRecipes')
const showRecipes = require('../utils/showRecipes')
const editRecipes = require('../utils/editRecipes')
const deleteRecipes = require('../utils/deleteRecipes')


// router.get('/', showRecipes.get);

router.get(`/`, async (req, res) => {
    let recipes = await Reciepes.find();
    return res.status(200).send(recipes);
  });

router.post('/createRecipes', createRecipes.post);

router.patch('/:id',editRecipes.patch);

router.delete("/delete", deleteRecipes.delete);


module.exports = router;
