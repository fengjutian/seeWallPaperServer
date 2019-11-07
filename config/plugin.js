'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  mongo: {
    enable: true,
    package: 'egg-mongo-native',
   // package: 'egg-mongoose',
  },

  cors: {
    enable: true,
    package: 'egg-cors',
  },
};

