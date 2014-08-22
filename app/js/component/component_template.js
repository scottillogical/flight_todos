define(function (require) {
  "use strict";
  var defineComponent = require('flight/lib/component');
  return defineComponent(component);

  function component() {
    this.after('initialize', function () {
      console.log('Initializing copmontent');
    });
  }
});
