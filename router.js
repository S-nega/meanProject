const express = require('express');
const User = require('./UserModel');
const cors = require('cors');
const { STATUS_CODES } = require('http');
const router = new express();

router.use(cors());
router.options('*', cors());

router.post('/user-create', cors(), async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });
  if (!candidate) {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.redirect('http://localhost:3000');
  } else {
    console.log('This email is already in use!');
    res.json({ message: 'This email is already in use!' });
  }
});

router.get('/user-getall', async (req, res) => {
  const result = await User.find({});
  res.send(result);
});

router.get('/user-get', async (req, res) => {
  const email = req.body.email;

  const result = await User.findOne({ email: email });
  res.send({ result });
});

router.post('/user-delete', cors(), async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user == null) {
    res.json({ message: 'user is not found' });
  } else {
    await User.deleteOne().then((err) => {
      if (err != null) {
        res.send(err);
      } else {
        res.json({ message: 'user is deleted successfully' });
      }
    });
  }
});

router.put('/user-update', cors(), async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user != null) {
      await User.updateOne({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      }).then(() => {
        res.send({ message: 'User is updated successfully!' });
      });
    } else {
      res.status(404).send({ error: 'user is not found!' });
    }
  } catch (error) {
    throw err;
  }
});

module.exports = router;