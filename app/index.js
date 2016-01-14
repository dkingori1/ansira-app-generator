'use strict';

var generators = require('yeoman-generator');
module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    console.log('constructor');
  },
    
  method1: function () {
    console.log('method 1 just ran');
  }
});