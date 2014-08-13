define(function (require) {
  "use strict";
  var defineComponent = require('flight/lib/component');
  return defineComponent(addTask);

  function addTask() {
    this.defaultAttrs({
      descriptionSelector: '.js-add-task-description',
      submitSelector: '.js-add-task-submit'
    });

    this.submit = function(event) {
      event.preventDefault();
      var $description = this.select('descriptionSelector');
      this.trigger('uiAddTask', {task: {description: $description.val()}});
      $description.prop('disabled', true);
      this.select('submitSelector').prop('disabled', true);
    };

    this.after('initialize', function () {
      this.on("submit", this.submit);
      console.log('Initializing Add Task form');
    });
  }
});
