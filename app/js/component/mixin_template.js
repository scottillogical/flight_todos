define(function (require) {
  "use strict";

  function mixin() {
    this.after('initialize', function () {
      console.log('Initializing mixin');
    });
  }

  return mixin;
});
