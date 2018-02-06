const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function () {
    console.log('mongoose opened!');
    var userSchema = new mongoose.Schema({
        name: { type: String, unique: true },
        password: String
    }, { collection: 'test' }
    );
    var User = mongoose.model('test', userSchema);

    User.findOne({ name: 'WangEr' }, function (err, doc) {
        if (err) console.log(err);
        else console.log(doc.name + ', password - ' + doc.password);
    });

    var lisi = new User({ name: 'LiSi', password: '123456' });
    lisi.save(function (err, doc) {
        if (err) console.log(err);
        else console.log(doc.name + ' saved');
    });
});