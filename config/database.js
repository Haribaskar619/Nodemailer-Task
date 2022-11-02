const mongoose = require("mongoose");

const connectDB = async () => {
   
try {
    const connection = await mongoose.connect("mongodb+srv://admin:a40G4h3pgw1WadmE@cluster0.ujztiwa.mongodb.net/?retryWrites=true&w=majority", {
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
