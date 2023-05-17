const Cat = require('../models/cat');

const getAllCats = async (req, res) => {
    try {
        const cats = await Cat.find({});
        res.json(cats);
        } catch {
        res.json({ msg: 'There was a problem getting all your cats.' })
        }
}

const createCat = async (req, res) => {
    try {
    const cat = await Cat.create(req.body);
    res.json(cat);
    } catch {
    res.json({ msg: 'There was a problem creating your cat.' });
    }
}

const getCat = async (req, res) => {
    try {
     const cat = await Cat.findById(req.params.id);
     res.json(cat);
    } catch {
    res.json({ msg: 'There was a problem getting your cat.' })
    }
}

const updateCat = async (req, res) => {
    try {
     const updatedCat = await Cat.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name }}, { new: true });
     res.json(updatedCat);
    } catch {
     res.json({ msg: 'There was a problem updating your cat.' })
    }
 }

const deleteCat = async (req, res) => {
    try {
    await Cat.findByIdAndDelete(req.params.id);
    res.json({ msg: 'This cat has been succesfully adopted' });
    } catch {
    res.json({ msg: 'There was a problem deleting your cat' });
    }
}

module.exports = {
    getAllCats,
    createCat,
    getCat,
    updateCat,
    deleteCat
}