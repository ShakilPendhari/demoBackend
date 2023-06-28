
const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect("mongodb+srv://shakil:shakilking@cluster0.8uoua.mongodb.net/university?retryWrites=true&w=majority");

module.exports = {
    connection
}