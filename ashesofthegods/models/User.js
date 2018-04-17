const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({

	savefile: { type: Schema.Types.ObjectId, required: true, ref: "SaveFile" },
});
//passport-local-mongoose creates a 'username' and some password fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);