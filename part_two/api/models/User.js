const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      maxlength: 20,
    },
    last_name: {
      type: String,
      required: true,
      maxlength: 20,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
    },
  },
);

module.exports = mongoose.model('User', UserSchema);
