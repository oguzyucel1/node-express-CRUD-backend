const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

username : {
    type: String,
    required: [true, "Please provide a username"],
},
email : {
    type: String,
    required: [true, "Please provide a email"],
    unique: [true, "Email already exists"],
},

password : {
    type: String,
    required: [true, "Please provide a password"],
 },
}, 

{
    timestamps: true,
}
);

module.exports = mongoose.model('User', userSchema);