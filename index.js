const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const app = express();
const dotenv = require("dotenv").config();
const router = require("./routes/routes");
const mongoose = require("mongoose");
// connectDB;



// Body Parser
app.use(express.json());


// Cors
app.use(cors());

// Port
const PORT = process.env.PORT || 5000;

// Router
app.use('/',router);

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT , () => {
        console.log(`Server is running on ${PORT}`)
    })
})


