'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//USER MODEL
const UserSchema = new Schema({
    id: ObjectId,
    name: String,
    mobile: String
});

mongoose.model('User', UserSchema);