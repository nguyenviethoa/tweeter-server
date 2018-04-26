const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TweetModelSchema = require('../tweet/TweetModelSchema');

const UserSchema = new Schema({
  username: {
    type: String,
    validate: {
      validator: (username) => { username.length > 2 },
      message: "username must be longer than 2 characters."
    },
    required: [true, 'username is required']
  },
  email: String,
  password: String,  
  first_name: String,
  last_name: String,
  full_name: String,
  avatar_url: String,
  tweetsSchema: [TweetModelSchema],
  tweets: [{
    type: Schema.Types.ObjectId,
    ref: 'tweet'
  }],
  jwt: String
});

UserSchema.virtual('tweetsCount').get(function() {
  return this.tweetsSchema.length;
});

UserSchema.pre('remove', function(next) {
  const TweetModel = mongoose.model('tweet');

  TweetModel.remove({ _id: { $in: this.tweets }})
    .then(() => next());

})

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;