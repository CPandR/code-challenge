const User = require('../models/User');

const postNewUser = async (user) => {
  try {
    const newUser = new User({ ...user });
    const dbEntry = await newUser.save();
    return dbEntry;
  } catch (err) {
    throw new Error(err);
  }
};

const retrieveAllUsers = async () => {
  try {
    const allUsers = await User.find({});
    return allUsers;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { postNewUser, retrieveAllUsers };
