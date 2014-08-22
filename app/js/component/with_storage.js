define(function (require) {
  "use strict";

  function withStorage() {
    this.after('initialize', function () {
      console.log('Initializing mixin');
    });
  }

  return withStorage;
});
