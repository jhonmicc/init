const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to FE JS-7 KM');
});

app.get('/pages', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});