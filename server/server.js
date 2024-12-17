// DEPENDENCIES
const express = require('express');
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//CONTROLLERS
const booksController = require('./controllers/books_controller.js');
app.use('/api/books', booksController);

// LISTEN 
const port = process.env.SERVER_PORT || 3400
app.listen(port, () => {
console.log(`listening on port: ${port}`);
});