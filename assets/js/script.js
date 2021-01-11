// The current day is displayed at the top of the calendar
let DateTime = luxon.DateTime;
var dt = DateTime.local();
$("#currentDay").text(dt.toLocaleString(DateTime.DATE_HUGE));

// Load Textareas
var loadTasks = function() {
  $("#txt-9").val(localStorage.getItem('9am'))
  $("#txt-10").val(localStorage.getItem('10am'))
  $("#txt-11").val(localStorage.getItem('11am'))
  $("#txt-12").val(localStorage.getItem('12pm'))
  $("#txt-13").val(localStorage.getItem('1pm'))
  $("#txt-14").val(localStorage.getItem('2pm'))
  $("#txt-15").val(localStorage.getItem('3pm'))
  $("#txt-16").val(localStorage.getItem('4pm'))
  $("#txt-17").val(localStorage.getItem('5pm'))
};

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

// Save slot descriptions
$("#btn-9").click(function() {
  localStorage.setItem('9am', $("#txt-9").val());
});

$("#btn-10").click(function() {
  localStorage.setItem('10am', $("#txt-10").val());
});

$("#btn-11").click(function() {
  localStorage.setItem('11am', $("#txt-11").val());
});

$("#btn-12").click(function() {
  localStorage.setItem('12pm', $("#txt-12").val());
});

$("#btn-13").click(function() {
  localStorage.setItem('1pm', $("#txt-13").val());
});

$("#btn-14").click(function() {
  localStorage.setItem('2pm', $("#txt-14").val());
});

$("#btn-15").click(function() {
  localStorage.setItem('3pm', $("#txt-15").val());
});

$("#btn-16").click(function() {
  localStorage.setItem('4pm', $("#txt-16").val());
});

$("#btn-17").click(function() {
  localStorage.setItem('5pm', JSON.stringify($("#txt-17").val()));
});

loadTasks();