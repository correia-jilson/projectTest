const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const userController = require("./controllers/userController");
const app = express();


const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: {type: String , required: true, unique: true },
    password: { type: String, required: true },
    imagepath: {type: String}
})
module.export = mongoose.model('main', userSchema);


app.use(express.json());

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "images/");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage: storage });

// DB connection

mongoose.connect('mongodb://localhost:27017/assign8', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


// User routes
app.post("/user/create", userController.createUser);
app.put("/user/edit/:email", userController.editUser);
app.delete("/user/delete/:email", userController.deleteUser);
app.get("/user/getAll", userController.getAllUsers);
app.post("/user/uploadImage/:email", upload.single("image"), userController.uploadUserImage);

// Start the server

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// app.listen(3001, () => {
//     console.log("Server running on port http://localhost:3001/");
// });

// module.exports = app;



