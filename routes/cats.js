const express = require('express');
const router = express.Router();

//Routes 

// GET
router.get('/', (req, res) => {
res.send('This is the get route for all cats!');
})

// POST a new cat
router.post('/', (req, res) => {
    res.send('This is the POST route for a new cat!');
})

// GET a single cat
router.get('/:id', (req, res) => {
    res.send(`This is the GET route for a single cat found at ${ req.params.id }`);
});

// PUT
router.put('/:id', (req, res) => {
    res.send(`This is the GET route for a single cat found at ${ req.params.id }`);
});

// DESTROY
router.delete('/:id', (req, res) => {
    res.send(`This is the GET route for a single cat found at ${ req.params.id }, bye bye`);
});


module.exports = router 