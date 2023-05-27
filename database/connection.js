const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amza:finalapp1@fyp-app.kg5gcet.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection
    .on('open', () => console.log('Database Connected'))
    .on('error', (error) => console.log(error))
    .on('close', () => console.log('Database Closed'));

module.exports = mongoose;
