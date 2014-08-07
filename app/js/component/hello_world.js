define(function (require) {
  "use strict";
  var defineComponent = require('flight/lib/component');
  return defineComponent(helloWorld);
  function helloWorld() {};
});
