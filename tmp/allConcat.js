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
