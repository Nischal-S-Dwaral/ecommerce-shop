const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const app = express();
const userRoutes = require('./routes/users');

dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {console.log("DB Connection Successful")})
    .catch((err) => {console.log(err)});

app.use(express.json());
app.use("/api/users", userRoutes);
app.listen(5001, () => {
    console.log('Server is running');
})