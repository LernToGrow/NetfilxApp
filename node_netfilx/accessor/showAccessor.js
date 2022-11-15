const { Shows } = require('../db/model/showModel');

function findByShowId(showId) {
  return Shows.find({ showId }).exec();
}

module.exports = {
  findByShowId
};

