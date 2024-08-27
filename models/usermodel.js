const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/testapp`);

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    watched: {
        type: [Number], 
        default: []     
    },
    is_sub: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("user", userSchema);