const express = require('express');
const app = express();
const port = 3000

//Routes 
app.get('/cats', (req, res) => {
res.send('This is the get route for all cats!');
})

// POST a new cat
app.post('/cats', (req, res) => {
    res.send('This is the POST route for a new cat!');
})

// GET a single cat
app.get('/cats/:id', (req, res) => {
    res.send(`This is the GET route for a single cat found at ${ req.params.id }`);
});

// PUT
app.put('/cats/:id', (req, res) => {
    res.send(`This is the GET route for a single cat found at ${ req.params.id }`);
});

// DESTROY
app.delete('/cats/:id', (req, res) => {
    res.send(`This is the GET route for a single cat found at ${ req.params.id }, bye bye`);
});

app.listen(port, () => {
    console.log('I am listening at port 3000')
});

