(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var AlarmClock = function(alarmTime) {
  this.alarmTime = alarmTime;
};

AlarmClock.prototype.getAlarmTime = function() {
  return this.alarmTime;
};

exports.AlarmClock = AlarmClock;

},{}],2:[function(require,module,exports){
var AlarmClock = require("./../js/project.js").AlarmClock;

$(document).ready(function(){
  setInterval(function(){ $('#time').text(moment().format('h:mm:ss a')); }, 1000);

  $("form").submit(function(event) {
    var hour = (moment().format('hh'));
    var minute = (moment().format('mm'));
    var alarmHour = $(".hours").val();
    var alarmMinute = $(".minutes").val();
    var ampm = $(".ampm").val();

    var fullAlarmTime = alarmHour + ":" + alarmMinute + " " + ampm;

    var newAlarm = new AlarmClock(fullAlarmTime);

    setInterval(function() {
      var fullCurrentTime = moment().format('h:mm a');
      console.log("current time", fullCurrentTime);
      console.log("alarm time", newAlarm.getAlarmTime());

      if (newAlarm.getAlarmTime() === fullCurrentTime) {
        console.log("alarms are equal");
      } else {
        console.log("alarms are not equal");
      }
    }, 1000);

    event.preventDefault();
  });

});

},{"./../js/project.js":1}]},{},[2]);
