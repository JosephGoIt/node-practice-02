const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Our Middleware');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page1</h1>');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

console.log('test print');