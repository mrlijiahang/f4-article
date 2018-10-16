'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_cb_f4_top77';

  // add your config here
  config.middleware = [ 'errorHandler' ];

  return config;
};
