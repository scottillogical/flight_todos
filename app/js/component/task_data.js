define(function (require) {
  "use strict";
  var defineComponent = require('flight/lib/component');
  return defineComponent(taskData);
  function taskData() {
    this.after('initialize', function() {
      this.on('uiAddTask', function(e, data) {
        this.tasks = this.tasks || {};
        console.log('taskData capturing uiAddTask');
        data.task.id = Date.now();
        this.tasks[data.task.id] = data.task;
        this.trigger('dataTaskAdded', data);

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
