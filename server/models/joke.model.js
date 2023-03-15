const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    },
});

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;

// note!!! when I tried to post a new joke with "set" instead of "setup", it didn't show
// up; only the punchline pair was added to the new joke