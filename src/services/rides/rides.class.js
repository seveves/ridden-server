const errors = require('@feathersjs/errors');
const geo = require('../../utils/geo');

/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  find (params) {
    if (params.query.near) {
      const nearParams = params.query.near.split(':');
      const distance = +nearParams[0];
      const lat = +nearParams[1];
      const lon = +nearParams[2];
      return this.options.ShuttleService.find().then(doc => ({
        data: doc.data.filter(shuttle => distance >= geo.getDistanceBetweenInKm(shuttle.location,{ lat, lon }))
      }));
    }
    return this.options.ShuttleService.find(params);
  }

  get (id, params) {
    return this.options.ShuttleService.get(id, params);
  }

  create (data, params) {
    return Promise.reject(new errors.MethodNotAllowed());
  }

  update (id, data, params) {
    return Promise.reject(new errors.MethodNotAllowed());
  }

  patch (id, data, params) {
    return Promise.reject(new errors.MethodNotAllowed());
  }

  remove (id, params) {
    return Promise.reject(new errors.MethodNotAllowed());
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
