'use strict';

module.exports = {
  load () {
    // execute when package loaded
    Editor.log('excel load success');
  },

  unload () {
    // execute when package unloaded
    Editor.log('excel unload');
  },

  // register your ipc messages here
  messages: {
    'open' () {
      // open entry panel registered in package.json
      Editor.Panel.open('excel2ts');
    },
  },
};