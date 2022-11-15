const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShowSchema = new Schema({
  showId: String,
  name: String,
  releaseDate: String,
  rating: Number,
  noOfRatings: Number,
  series: [
    {
      seriesId: String,
      name: String,
      releaseDate: String,
      rating: Number,
      noOfRatings: Number,
      episodes: [
        {
          videoId: String,
          title: String,
          videoPath: String,
          thumbnailPath: String,
          rating: Number,
          noOfRatings: Number
        }
      ]
    }]
});

module.exports = {
  ShowSchema
};

/**
 * {
 *   "showId": "feead368-4fc9-490f-9a1d-f2239fcc8779",
 *   "name": "Friends",
 *   "releaseDate": "15 December 1994",
 *   "rating": 9.4,
 *   "series": [
 *     {
 *       "seriesId": "e03c290f-b800-4900-85cd-a2f669379494",
 *       "name": "Season 1",
 *       "releaseDate": "15 December 1994",
 *       "rating": 9.2,
 *       "episodes": [
 *         {
 *           "videoId": "152c283b-1ab8-4549-a0bc-909cfc0f4029",
 *           "title": "Episode 1 - Pilot",
 *           "videoPath": "videos/Death_Note/Death Note - 01 - Rebirth.mkv",
 *           "thumbnailPath": "thumbnails/1.jpeg",
 *           "rating": 8.5
 *         },
 *         {
 *           "videoId": "8d60db64-aaa7-4ecb-8181-fc62fe97d79f",
 *           "title": "Episode 2",
 *           "videoPath": "videos/Death_Note/Death Note - 02.mkv",
 *           "thumbnailPath": "thumbnails/2.jpeg",
 *           "rating": 8.5
 *         }
 *       ]
 *     }
 *   ]
 * }
 */