const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true },
    password: String,
    imagePath: String
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
