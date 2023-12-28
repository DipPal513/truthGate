const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please Enter a name"]
    },
    avatar: {
        public_id: String,
        url: String
    }, 
    email: { 
        type:String,
        required: [true, "Please enter an email"], 
        unique: [true, "the email that you entered is already exists"] 
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minLength: [6, "Password must be at least 6 characters"],
        select: false
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
    ,
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});


module.exports = mongoose.model("User", userSchema);