// The current day is displayed at the top of the calendar
let DateTime = luxon.DateTime;
var dt = DateTime.local();
$("#currentDay").text(dt.toLocaleString(DateTime.DATE_HUGE));

var hourArr = [];

$('.input-group').each(function() {
  hourArr.push($(this).data('id'));
})
console.log(hourArr)