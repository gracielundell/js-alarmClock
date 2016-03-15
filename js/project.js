var AlarmClock = function(alarmTime) {
  this.currentTime = moment().format('h:mm:ss a');
  this.alarmTime = alarmTime;
};

AlarmClock.prototype.convertCurrentTime = function(currentTime) {
  var hour = 60000;
  currentTime *= hour;
  return currentTime;
};





exports.projectName = function(goal) {
  //code goes here

};
