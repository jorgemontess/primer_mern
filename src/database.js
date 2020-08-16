const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks'


mongoose.set('useUnifiedTopology', true);

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DataBase is connected'))
    .catch(err => console.error(err));


module.exports = mongoose;