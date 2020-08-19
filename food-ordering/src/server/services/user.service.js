const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const config = require('../config')

async function authenticateService({ email, password }) {
  const user = await User.findOne({ email })
  console.log(user, 'user')
  if (user && bcrypt.compareSync(password, user.hash)) {
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' })
    return {
      ...user.toJSON(),
      token,
    }
  }
}

async function getAllService() {
  return await User.find()
}

async function getByIdService(id) {
  return await User.findById(id)
}

async function create(userParam) {
  // validate
  if (await User.findOne({ email: userParam.email })) {
    // eslint-disable-next-line no-throw-literal
    throw 'Email "' + userParam.email + '" is already taken'
  }

  const user = new User(userParam)

  // hash password
  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10)
  }

  // save user
  await user.save()
}

module.exports = {
  authenticateService,
  getAllService,
  getByIdService,
  create,
}
