const R = require('ramda');
const ShowAccessor = require('../accessor/showAccessor');
const S3Accessor = require('../accessor/s3Accessor');

function findByShowId(showId) {
  return ShowAccessor.findByShowId(showId)
    .then(shows => shows[0]);
}

function findSeriesByKey(showId, seriesId) {
  return ShowAccessor.findByShowId(showId)
    .then(shows => shows[0])
    .then(show => {
      if (!R.isNil(show)) {
        return show.series.find(series => series.seriesId === seriesId);
      }
      else {
        return null;
      }
    });
}

function findVideoLink(showId, seriesId, videoId) {
  return findSeriesByKey(showId, seriesId)
    .then(series => {
      if (!R.isNil(series)) {
        return series.episodes.find(episode => episode.videoId === videoId);
      }
      return null;
    })
    .then(video => {
      if (!R.isNil(video)) {
        let p1 = S3Accessor.fetchPresignedUrl(video.videoPath, 10*60);
        let p2 = S3Accessor.fetchPresignedUrl(video.thumbnailPath, 5*60);
        return Promise.all([p1, p2])
          .then(values => {
            return {
              ...video.toObject(),
              videoPath: values[0],
              thumbnailPath: values[1]
            };
          });
      }
      else {
        return null;
      }
    })
}

module.exports = {
  findByShowId,
  findSeriesByKey,
  findVideoLink
};