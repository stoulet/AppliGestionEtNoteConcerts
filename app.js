//import modue express
const express = require('express');

//import module body-parser
const bodyParser = require('body-parser');

//import module mongoose
const mongoose = require('mongoose');

const routes = require('./routes');

//création de l'application
const app = express();

//utilisation du moteur de template Pug pour les views
app.set('view engine', 'pug');

//mise à disposition de la bibli. Boootstrap du côté client
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

//config app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//route concertRoutes
app.use(routes);

//connexion à MongoDB avec Mongoose et lancement de l'appli
mongoose
  .connect('mongodb://localhost:27017/bd_appli_gestion_concert', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(3000, () => console.log('server started')));
