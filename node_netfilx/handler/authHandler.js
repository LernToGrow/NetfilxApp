const AuthService = require('../service/authService');

function login(req, res) {
  const { email, password } = req.body;
  return AuthService.login(email, password)
    .then((output) => {
      console.log(`output = ${output}`);
      if (output.statusCode === 200) {
        res.status(200).send(output.token+"login successfulll");
        // res.status(200).send("login successfull");
      }
      else {
        res.status(output.statusCode).send('Login Failed!');
      }
    })
    .catch(error => {
      console.log(`error = ${error}`);
      res.status(500).send(error);
    });
}

function logout(req, res) {
  AuthService.logout(req.user.userId)
    .then(() => {
      res.status(200).send('Logged Out Successfully!');
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
}

module.exports = {
  login,
  logout
};