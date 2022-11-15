const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  userId: String,
  name: String,
  email: String,
  password: String,
  phoneNo: String,
  isEmailVerified: Boolean,
  isPhoneNoVerified: Boolean,
  creationDate: Date,
  role: String,
  state: String,
  profiles: [ { profileId: String, name: String, active: Boolean }],
  watchHistory: [{
    showId: String,
    series: [
      {
        seriesId: String,
        episodes: [
          {
            videoId: String,
            watchTime: Number
          }
        ]
      }
    ]
  }]
});

/**
 * {
 *   "_id": {
 *     "$oid": "62f756d82c080d69fb227fd9"
 *   },
 *   "userId": "894392f8-8ae4-4cf4-a133-bd15b3e2b784",
 *   "name": "Pratik",
 *   "email": "ps06756@gmail.com",
 *   "password": "1234",
 *   "phoneNo": "971831233213",
 *   "isEmailVerified": false,
 *   "isPhoneNoVerified": false,
 *   "role": "ROLE_CUSTOMER",
 *   "state": "Active",
 *   "__v": 3,
 *   "profiles": [
 *     {
 *       "profileId": "f1149a16-5360-484c-a5fb-0c5750eeb29f",
 *       "name": "Pratik 1",
 *       "active": false,
 *       "_id": {
 *         "$oid": "62f87b296785136d2f75e622"
 *       }
 *     },
 *     {
 *       "profileId": "63dcf37a-ab7e-4f36-9b02-243d59bcf438",
 *       "name": "Pratik 2",
 *       "_id": {
 *         "$oid": "62f87b516785136d2f75e627"
 *       },
 *       "active": true
 *     }
 *   ],
 *   "watchHistory": [
 *     {
 *       "showId": "123",
 *       "series": [
 *         {
 *           "seriesId": "456",
 *           episodes: [
 *             {
 *               "videoId": "a123",
 *               "watchTime": 800
 *             },
 *             {
 *               "videoId": "b123",
 *               "watchTime": 600
 *             }
 *           ]
 *         }
 *       ]
 *     }
 *   ]
 * }
 * @type {{UserSchema: module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, DefaultTypeKey, {password: StringConstructor, role: StringConstructor, name: StringConstructor, profiles: [{profileId: StringConstructor, name: StringConstructor, active: BooleanConstructor}], isPhoneNoVerified: BooleanConstructor, state: StringConstructor, creationDate: DateConstructor, userId: StringConstructor, email: StringConstructor, phoneNo: StringConstructor, isEmailVerified: BooleanConstructor}>}}
 */
module.exports = {
  UserSchema
};