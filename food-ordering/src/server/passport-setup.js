const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy
const User = require('./models/user')

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '916830606420-8r2rpmvppildett3uar4v1rqbk6le1i2.apps.googleusercontent.com',
      clientSecret: 'qal5QZMi3B2cGTUb07nzEkJl',
      callbackURL: '/google/callback',
      passReqToCallback: true
    },
    (request, accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          console.log(profile)
          done(null, currentUser)
        } else {
          new User({
            username: profile.displayName,
            googleId: profile.id,
            avatar: profile._json.picture
          })
            .save()
            .then(newUser => {
              done(null, newUser)
            })
        }
      })
    }
  )
)
