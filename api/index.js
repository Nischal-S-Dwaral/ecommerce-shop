const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const app = express();
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {console.log("DB Connection Successful")})
    .catch((err) => {console.log(err)});

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.listen(5001, () => {
    console.log('Server is running');
})