/*
 * @Author: Lienren 
 * @Date: 2018-01-26 11:39:19 
 * @Last Modified by:   Lienren 
 * @Last Modified time: 2018-01-26 11:39:19 
 */
('use strict');
const moment = require('moment');

function timing() {
  this.timing_count = 0;
  this.timing_interval = 1000;
  this.timing_object = null;
  this.timing_stop = false;
}
timing.prototype.init = function(interval = 1000) {
  this.timing_count = 0;
  this.timing_interval = interval;
  this.cleartime();
  this.timing_stop = false;
  return this;
};
timing.prototype.run = function(callback) {
  this.cleartime();
  this.timing_stop = false;
  this.start(callback);
  return this;
};
timing.prototype.start = function(callback) {
  if (this.timing_stop) {
    console.log('timing stop!');
    return;
  }
  this.cleartime();
  this.timing_object = (function(sender, callback) {
    return setTimeout(function() {
      callback(sender.timing_count++, moment().format('YYYY-MM-DD HH:mm:ss.SSS'), moment().unix());
      sender.start(callback);
    }, sender.timing_interval);
  })(this, callback);

  return this;
};
timing.prototype.stop = function() {
  this.cleartime();
  this.timing_stop = true;
  return this;
};
timing.prototype.cleartime = function() {
  if (this.timing_object) {
    clearTimeout(this.timing_object);
    this.timing_object = null;
  }
};

module.exports = () => {
  return new timing();
};
