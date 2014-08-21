define(function (require) {
  "use strict";
  var defineComponent = require('flight/lib/component');
  var withStorage = require('flight/lib/withStorage');

  return defineComponent(taskData);

  function taskData() {
    this.handleUiAddTask = function(e, data) {
      this.tasks = this.tasks || {};
      data.task.id = Date.now();
      this.tasks[data.task.id] = data.task;
      this.trigger('dataTaskAdded', data);
    };

    this.handleUiNeedsTask = function(e, data) {
      var task = this.tasks[data.taskId];
      if (task) {
        this.trigger('dataTask', {task: task});
      }
    };

    this.handleUiNeedsTasks = function(e, ids) {
      //var tasks = ids.map(function(id) {
        //return this.tasks[id];
      //}, this);
      this.trigger('dataTasks', {tasks: this.tasks});
    };


    this.handleUiTaskCompleted = function(e, data) {
      var task = this.tasks[data.task.id];
      if (!task) {
        this.trigger('dataTaskError', {
          request: {
            event: e,
            data: task,
          },
          message: 'Task could not be found'
        });
      }
      task.completed = true;
      this.trigger('dataTaskCompleted', {task: task});
    };

    this.after('initialize', function() {
      this.on('uiAddTask', this.handleUiAddTask);
      this.on('uiNeedsTask', this.handleUiNeedsTask);
      this.on('uiNeedsTasks', this.handleUiNeedsTasks);
      this.on('uiTaskCompleted', this.handleUiTaskCompleted);
    });
  }
});
