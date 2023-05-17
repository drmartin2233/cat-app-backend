const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');
const catController = require('../controllers/cats');


//Routes 

// GET
router.get('/', catController.getAllCats);

// POST a new cat
router.post('/', catController.createCat);


// GET a single cat
router.get('/:id', catController.getCat);

// PUT to update cat
router.put('/:id', catController.updateCat);


// DESTROY
router.delete('/:id', catController.deleteCat);


module.exports = router 