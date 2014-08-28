define(function (require) {
  "use strict";

  function withStorage() {
    this.after('initialize', function () {
      console.log('Initializing withStorage');
    });

    this.read = function(key) {
      return JSON.parse(window.localStorage.getItem(key));
    };

    this.write = function(key, data) {
      window.localStorage.setItem(key, JSON.stringify(data));
    };
  }

  return withStorage;
});
