$(document).ready(function(){
  setInterval(function(){ $('#time').text(moment().format('h:mm:ss a')); }, 1000);


  $("#test").click(function() {
    var time = (moment().format('h:mm:ss a'))
    $(".currentTime").append(time);
  });

});
