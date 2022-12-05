const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Hello')
})

app.listen(3000);
console.log('attente requete port 3000');

