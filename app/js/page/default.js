define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */
  var AddTask = require('component/add_task');
  var TaskData = require('component/task_data');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    AddTask.attachTo('.js-add-task');
    TaskData.attachTo(document);
  }

});
