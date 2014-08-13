define(function (require) {
  "use strict";
  var defineComponent = require('flight/lib/component');
  return defineComponent(taskData);
  function taskData() {
    this.after('initialize', function() {
      this.on('uiAddTask', function(e, data) {
        console.log('taskData capturing uiAddTask');
      });
      this.on('uiNeedsTask', function() {
        console.log('taskData capturing uiNeedsTask');
      });
      this.on('uiNeedsTasks', function() {
        console.log('taskData capturing uiNeedsTasks');
      });
      this.on('uiTaskCompleted', function() {
        console.log('taskData capturing uiTaskCompleted');
      });
    });
  }
});
