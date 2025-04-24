const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected...');
    }).catch(err => console.error(err));
};

module.exports = connectToDb;