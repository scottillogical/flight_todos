define(function (require) {
  "use strict";
  var defineComponent = require('flight/lib/component');
  return defineComponent(listTasks);

  function listTasks() {
    this.defaultAttrs({
      taskListSelector: 'ul.tasks',
      submitSelector: '.js-add-task-submit'
    });
    this.handleUiNeedsTasks = function() {
    };

    this.handleDataTaskAdded = function() {
      this.select('taskListSelector').append("something");
      console.log("handleDataTaskAdded");
    };

    this.after('initialize', function () {
      this.trigger('uiNeedsTasks');
      this.on('dataTaskAdded', this.handleDataTaskAdded);
    });
  }
});
