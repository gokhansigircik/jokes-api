const mongoose = require('mongoose');
 
const JokesSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    funny: {
        type: String
    },
    punchLine: {
        type: String
    }
});
 
const Jokes = mongoose.model('Jokes', JokesSchema);
 
module.exports = Jokes