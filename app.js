const express = require('express');
const app = express();
const helloWorld = require('./controllers/helloWorld.js')

app.get('/', helloWorld);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
