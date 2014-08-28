define(function (require) {
  "use strict";
  var defineComponent = require('flight/lib/component');
  var withStorage = require('component/with_storage');

  return defineComponent(taskData, withStorage);

  function taskData() {
    this.handleUiAddTask = function(e, data) {
      this.tasks = this.tasks || {};
      data.task.id = Date.now();
      this.tasks[data.task.id] = data.task;
      this.write('tasks', this.tasks);
      this.trigger('dataTaskAdded', data);
    };

    this.handleUiNeedsTask = function(e, data) {
      var task = this.tasks[data.taskId];
      if (task) {
        this.trigger('dataTask', {task: task});
      }
    };

    this.handleUiNeedsTasks = function(e) {
      var tasks = Object.keys(this.tasks).map(function(key) {
        return this.tasks[key];
      }, this);
      this.trigger('dataTasks', {tasks: tasks});
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

      if(this.read('tasks')) {
        this.tasks = this.read('tasks');
      }
      this.tasks = this.tasks || {};
    });
  }
});
