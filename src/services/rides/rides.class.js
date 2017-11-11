const errors = require('@feathersjs/errors');
const geo = require('../../utils/geo');

/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  find (params) {
    return new Promise((resolve, reject) => {
      if (params.query.near) {
        const nearParams = params.query.near.split(':');
        const distance = +nearParams[0];
        const lat = +nearParams[1];
        const lon = +nearParams[2];
        delete params.query['near'];
        this.options.Model.find(params.query, (err, docs) => {
          if (err) {
            return reject(err);
          }
          resolve({
            data: docs.filter(shuttle => distance >= geo.getDistanceBetweenInKm(shuttle.location, { lat, lon }))
          });
        })
      } else {
        this.options.Model.find(params.query, (err, docs) => {
          if (err) {
            return reject(err);
          }
          resolve({ data: docs });
        });
      }
    });
  }

  get (id, params) {
    return Promise.reject(new errors.MethodNotAllowed());
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
