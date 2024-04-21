const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");
const UserModel = require("../models/userModel");

// Joi validation schema
const userValidationSchema = Joi.object({
    fullName : Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password : Joi.string().min(8).required()
});

const createUser = async (req, res) => {
    try {
        const { error } = userValidationSchema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let user = await UserModel.findOne({ email: req.body.email });
        if (user) return res.status(400).send("Email already registered.");

        user = new UserModel(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

const editUser = async (req, res) => {
    try {
        const { fullName, email , password } = req.body;
        
        if (!fullName) return res.status(404).send("fullName not found.");
        if (!email) return res.status(404).send("Email not found.");
        if (!password) return res.status(404).send("password not found.");
        const user = await UserModel.findOne({ email });
        if (fullName) user.fullName = fullName;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        await user.save();
        res.status(200).send("User details updated.");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

const deleteUser = async (req, res) => {
    try {
        const {email} = req.body;
        const result = await UserModel.deleteOne({ email});
        if (result.deletedCount === 0) return res.status(404).send("User not found.");

        res.status(200).send("User deleted successfully.");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find().select("-password");
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

const uploadUserImage = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.params.email });
        if (!user) return res.status(404).send("User not found.");

        if (!req.file) return res.status(400).send("No image file provided.");

        user.imagePath = req.file.path;
        await user.save();

        res.status(200).send({ message: "Image uploaded successfully", imagePath: req.file.path });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};







module.exports = {
    createUser,
    editUser,
    deleteUser,
    getAllUsers,
    uploadUserImage
};
