// The current day is displayed at the top of the calendar
let DateTime = luxon.DateTime;
var dt = DateTime.local();
$("#currentDay").text(dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY));

// color code time block to indicate past, present or future
$('.row').each(function() {
  var taskHour = $(this).data('id');
  var currentHour = DateTime.local().hour
  
  if (taskHour < currentHour) {
    $(".form-control").addClass("past");
  } else if (taskHour > currentHour) {
    $(".form-control").addClass("future");
  } else {
    $(".form-control").addClass("present");
  }
});

// enter event details on time block click
// save event details to local storage 