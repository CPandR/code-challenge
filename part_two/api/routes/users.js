const express = require('express');
const { postNewUser, retrieveAllUsers } = require('../controllers/userController');
const User = require('../models/User');

const router = express.Router();

router.post('/new_user', async (req, res) => {
  try {
    const dummyUser = { first_name: 'John', last_name: 'Smith' }; // Passed in by request object but for demonstration purposes it has been hard coded
    const newUser = await postNewUser(dummyUser);
    return res.status(200).send(newUser);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.get('/all', async (_, res) => {
  try {
    const allUsers = await retrieveAllUsers();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
