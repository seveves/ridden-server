// shuttles-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const shuttles = new Schema({
    title: { type: String, required: true },
    languages: [String],
    description: { type: String, required: true },
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
    takingOff: { type: Date, required: true },
    duration: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    userId: String,
  }, {
    timestamps: true
  });

  return mongooseClient.model('shuttles', shuttles);
};
