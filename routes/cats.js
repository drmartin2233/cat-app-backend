const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');



//Routes 
// GET
router.get('/', async (req, res) => {
    try {
        const cats = await Cat.find({});
        res.json(cats);
       } catch {
       res.json({ msg: 'There was a problem getting all your cats.' })
       }
});

// POST a new cat
router.post('/', async (req, res) => {
    try {
    const cat = await Cat.create(req.body);
    res.json(cat);
    } catch {
    res.json({ msg: 'There was a problem creating your cat.' });
    }
});

// GET a single cat
router.get('/:id', async (req, res) => {
    try {
     const cat = await Cat.findById(req.params.id);
     res.json(cat);
    } catch {
    res.json({ msg: 'There was a problem getting your cat.' })
    }
});

// PUT to update cat
router.put('/:id', async (req, res) => {
   try {
    const updatedCat = await Cat.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name }}, { new: true });
    res.json(updatedCat);
   } catch {
    res.json({ msg: 'There was a problem updating your cat.' })
   }
});

// DESTROY
router.delete('/:id', async (req, res) => {
    try {
    await Cat.findByIdAndDelete(req.params.id);
    res.json({ msg: 'This cat has been succesfully adopted' });
    } catch {
    res.json({ msg: 'There was a problem deleting your cat' });
    }
});


module.exports = router 