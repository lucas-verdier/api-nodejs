const express = require('express');
const routeUser = require('./route/users');
const routeGroup = require('./route/groups');
const { connection } = require("./database/connect");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use('/api', routeUser);
app.use('/api', routeGroup);

connection('mongodb://127.0.0.1:27017', (err) => {
    if (err) {
        console.log('Erreur de connexion à la base de données');
        process.exit(-1);
    } else {
        console.log('Connexion avec la bdd établie');
        app.listen(3000);
        console.log('Attente requete port 3000');
    }
})


