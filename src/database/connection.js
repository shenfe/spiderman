const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

const { user } = require('./schema');

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function () {
    console.log('mongoose opened!');

    const userSchema = new mongoose.Schema(user, { collection: 'test' });

    const User = mongoose.model('test', userSchema);

    User.findOne({ name: 'WangEr' }, function (err, doc) {
        err
        ? console.log(err)
        : console.log(doc.name + ', ' + doc.password);
    });

    const lisi = new User({ name: 'ZhangSan', password: '123456' });
    lisi.save(function (err, doc) {
        err
        ? console.log(err)
        : console.log(doc.name + ' saved');
    });
});