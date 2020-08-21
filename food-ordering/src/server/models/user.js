const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const UserSchema = new Schema({
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true,
//   },
//   username: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   roles: {
//     type: Array,
//     default: [],
//   },
//   createdDate: { type: Date, default: Date.now },
// })

const UserSchema = new Schema({
  usename: String,
  googleId: String
})

const User = mongoose.model('User', UserSchema)
module.exports = User
