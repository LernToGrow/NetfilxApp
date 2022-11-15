const R = require('ramda');
const UserService = require('../service/userService');

function signupHandler(req, res) {
  const userInput = req.body;
  console.log(`userInput = ${JSON.stringify(userInput)}`);
  if (R.isNil(userInput.email)) {
    res.status(400).send('Email not present!');
    return;
  }
  if (R.isNil(userInput.phoneNo)) {
    res.status(400).send('Phone no not present!');
    return;
  }
  if (R.isNil(userInput.name)) {
    res.status(400).send('Name not present!');
    return;
  }
  if (R.isNil(userInput.password)) {
    res.status(400).send('Password not present!');
    return;
  }
  UserService.addNewUser(userInput)
    .then(() => res.status(200).send('User created successfully!'))
    .catch((error) => res.status(500).send(error));
}

function addNewProfile(req, res) {
  const name = req.body.name;
  const userId = req.userId;
  UserService.addNewProfile(userId, name)
    .then(() => {
      res.status(200).send('Profile added successfully!');
    })
    .catch(error => {
      console.log(`error = ${error}`);
      res.status(500).send(error);
    });
}

function deactivateProfile(req, res) {
  const profileId = req.params.profileId;
  const userId = req.userId;
  UserService.deactivateProfile(userId, profileId)
    .then(() => {
      res.status(200).send('Profile deactivated successfully!');
    })
    .catch(error => {
      console.log(`error = ${error}`);
      res.status(500).send(error);
    })
}

function updateWatchHistory(req, res) {
  const showId = req.params.showId;
  const seriesId = req.params.seriesId;
  const videoId = req.params.videoId;
  const userId = req.userId;
  const watchTime = req.body.watchTime;

  UserService.updateWatchHistory(userId, showId, seriesId, videoId, watchTime)
    .then(() => {
      res.status(200).send('Watch History Updated!');
    })
    .catch(error => {
      console.log(`error = ${error}`);
      res.status(500).send(error);
    });
}

function getWatchHistory(req, res) {
  const showId = req.params.showId;
  const seriesId = req.params.seriesId;
  const videoId = req.params.videoId;
  const userId = req.userId;

  return UserService.getWatchHistory(userId, showId, seriesId, videoId)
    .then(watchHistory => {
      res.status(200).send(watchHistory);
    })
    .catch(error => {
      console.log(`error = ${error.stack}`);
      res.status(500).send(error);
    });
}

module.exports = {
  signupHandler,
  addNewProfile,
  deactivateProfile,
  updateWatchHistory,
  getWatchHistory
};