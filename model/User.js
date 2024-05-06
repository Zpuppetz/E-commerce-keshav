const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true
    }
})

UserSchema.plugin(passportLocalMongoose);


let User = mongoose.model(`User`, UserSchema);

module.exports = User;
