var express = require('express');
var router = express.Router();

const createRecipes = require('../utils/createRecipes')
const showRecipes = require('../utils/showRecipes')
const editRecipes = require('../utils/editRecipes')

router.get('/', showRecipes.get);

router.post('/add_recipes', createRecipes.post);

router.patch('/:id',editRecipes.patch);

module.exports = router;
