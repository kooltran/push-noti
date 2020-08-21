const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy
const User = require('./models/user')

// passport.serializeUser((user, done) => {
//   done(null, user.id)
// })

// passport.deserializeUser((id, done) => {
//   User
// })

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '916830606420-8r2rpmvppildett3uar4v1rqbk6le1i2.apps.googleusercontent.com',
      clientSecret: 'qal5QZMi3B2cGTUb07nzEkJl',
      callbackURL: '/google/callback',
      passReqToCallback: true
    },
    function (request, accessToken, refreshToken, profile, done) {
      new User({
        username: profile.displayName
      }).save()
    }
  )
)
