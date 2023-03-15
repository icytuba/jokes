const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.put('/api/jokes/:id', JokeController.updateOneJoke);
    app.post('/api/jokes', JokeController.createJoke);
    app.delete('/api/jokes/:id', JokeController.deleteOneJoke);
}

//DONT FREAKING FORGET the leading forward slash for your paths AND the semicolons (not commas)