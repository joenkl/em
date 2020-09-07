const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
import { TEXT } from '../config';

const userModelText = _.get(TEXT, 'MODELS.USER');
const Schema = _.get(mongoose, 'Schema');

const userSchema = new mongoose.Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  email: {
    type: String,
    required: [true, _.get(userModelText, 'EMAIL_IS_REQUIRED')],
    trim: true,
    lowercase: true,
    unique: true,
  },
  name: {
    first: {
      type: String,
      trim: true,
    },
    last: {
      type: String,
      trim: true,
    },
  },
  image: {
    type: String,
    trim: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  friends: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
  },
  auth: {
    googleID: {
      type: String,
      trim: true,
      index: true,
      unique: true,
      sparse: true,
    },
    facebookID: {
      type: String,
      trim: true,
      index: true,
      unique: true,
      sparse: true,
    },
  },
});

// validate
userSchema
  .path('email')
  .validate(
    email => validator.isEmail(email),
    _.get(userModelText, 'EMAIL_IS_INVALID'),
  );

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
