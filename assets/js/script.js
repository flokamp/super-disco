// The current day is displayed at the top of the calendar
let DateTime = luxon.DateTime;

var dt = DateTime.local()
$("#currentDay").text(dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY))

// show time blocks for standard business hours

// color code time block to indicate past, present or future
// enter event details on time block click
// save event details to local storage