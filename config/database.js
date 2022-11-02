const mongoose = require("mongoose");

const connectDB = async () => {
    console.log(process.env.MONGO_URI)
try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
}
};

module.exports = connectDB;
