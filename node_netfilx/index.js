const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const UserHandler = require('./handler/userHandler');
const AuthHandler = require('./handler/authHandler');
const ShowHandler = require('./handler/showHandler');
const Authentication = require('./middleware/authentication');
const Authorization = require('./middleware/authorization');
const Roles = require('./db/constants/roles');

app.use(express.json());

// let clusterUrl = 'netflixbackend.pmpa2ce.mongodb.net';
let clusterUrl = 'netfilxbackend.i9rughl.mongodb.net';
let username = process.env.MONGO_USERNAME;
let password = process.env.MONGO_PASSWORD;
let dbName = 'netflix';
// let dbUrl = `mongodb+srv://sam:sam@${clusterUrl}/${dbName}`;
let dbUrl = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}`;

mongoose.connect(dbUrl)
  .then(() => console.log('MongoDB connection successfull!'))
  .catch(error => console.log(`Unable to connect to mongodb because of error ${error}`));

app.get('/', function(req, res) {
  res.send('Hello World From Netflix Backend!');
});

app.post('/user', UserHandler.signupHandler);
app.post('/user/profile', Authentication.checkIfAuthenticated,
  Authorization.checkIfAuthorized([Roles.ROLE_CUSTOMER]),
  UserHandler.addNewProfile);
app.delete('/user/profile/:profileId', Authentication.checkIfAuthenticated,
  Authorization.checkIfAuthorized([Roles.ROLE_CUSTOMER]),
  UserHandler.deactivateProfile);

app.post('/',
  Authentication.checkIfAuthenticated,
  Authorization.checkIfAuthorized([Roles.ROLE_CUSTOMER]),
  function(req, res) {
  res.status(200).send('You are Logged In!');
})


app.post('/login', AuthHandler.login);
app.post('/logout', Authentication.checkIfAuthenticated,
  Authorization.checkIfAuthorized([Roles.ROLE_USER, Roles.ROLE_CUSTOMER]),
  AuthHandler.logout);

/** Show Related APIs */
app.get('/show/:showId', Authentication.checkIfAuthenticated,
  Authorization.checkIfAuthorized([Roles.ROLE_CUSTOMER, Roles.ROLE_USER ]),
  ShowHandler.getShowById
);

app.get('/show/:showId/series/:seriesId', Authentication.checkIfAuthenticated,
  Authorization.checkIfAuthorized([Roles.ROLE_CUSTOMER, Roles.ROLE_USER ]),
  ShowHandler.findSeriesByKey);

app.get('/show/:showId/series/:seriesId/video/:videoId/link', Authentication.checkIfAuthenticated,
  Authorization.checkIfAuthorized([Roles.ROLE_CUSTOMER]),
  ShowHandler.findVideoLink);

app.post('/show/:showId/series/:seriesId/video/:videoId/watchHistory', Authentication.checkIfAuthenticated,
  Authorization.checkIfAuthorized([Roles.ROLE_CUSTOMER]),
  UserHandler.updateWatchHistory);

app.get('/show/:showId/series/:seriesId/video/:videoId/watchHistory', Authentication.checkIfAuthenticated,
  Authorization.checkIfAuthorized([Roles.ROLE_CUSTOMER]), UserHandler.getWatchHistory);

app.listen(3000, function() {
  console.log('Server started up on port 3000');
});