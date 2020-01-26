var express = require('express');
var router = express.Router();


const createRecipes = require('../utils/createRecipes')
const showRecipes = require('../utils/showRecipes')
const editRecipes = require('../utils/editRecipes')
const deleteRecipes = require('../utils/deleteRecipes')

router.get('/', showRecipes.get);

router.post('/create-recipes', createRecipes.post);

router.put('/update/:id',editRecipes.put);

router.delete("/delete/:id", deleteRecipes.delete);


module.exports = router;
