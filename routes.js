const router = require('express').Router();

const model = require('./model');

//routes

router.get('/', async (req, res) => {
    const listeConcert = await model.find();
    res.render('home', { listeConcert });
});

router.get('/form', async (req, res) => {
    try {
        const listeGroupe = await model.find().distinct('nomGroupe');
        const listeSalle = await model.find().distinct('salle');
        res.render('form', { listeGroupe, listeSalle });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/delete/:id', async (req, res) => {
    await model.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

router.post('/form', async (req, res) => {
    try {
        const newConcert = new model(req.body);
        const result = await newConcert.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;