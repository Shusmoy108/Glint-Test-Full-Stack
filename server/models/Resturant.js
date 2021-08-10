'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ResturantSchema = new Schema({
    name: String,
    timings: [String],
});
