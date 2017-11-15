const mongoose = require('mongoose');

module.exports = function (app) {
  let mongoUser = process.env.MONGO_USER;
  let mongoPassword = process.env.MONGO_PW;
  let mongoConnection = `mongodb://${mongoUser}:${mongoPassword}@ds163595.mlab.com:63595/ridden`;
  
  mongoose.connect(mongoUser && mongoPassword ? mongoConnection : app.get('mongodb'), {
    useMongoClient: true
  });
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
