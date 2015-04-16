'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/hak4good-dev'
    //uri: 'mongodb://<dbuser>:<dbpassword>@ds029640.mongolab.com:29640/hak4good'
  },

  seedDB: true
};
