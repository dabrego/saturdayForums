
const mongoose = require('mongoose');

// TODO: refactor

const mongoURL = process.env.NODE_ENV === 'test'

  ? 'mongodb://localhost:27017/forum-app-test'
  : 'mongodb://localhost:27017/forum-app'


mongoose.connect('mongodb://localhost:27017/forum-app');

module.exports = mongoose;


