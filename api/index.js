const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const app = express();
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

dotenv.config();

const stripeRoutes = require('./routes/stripe');

const cors = require('cors');
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {console.log("DB Connection Successful")})
    .catch((err) => {console.log(err)});

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/checkout", stripeRoutes);
app.listen(5001, () => {
    console.log('Server is running');
})