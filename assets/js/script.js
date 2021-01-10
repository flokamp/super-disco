// The current day is displayed at the top of the calendar
const today = dayjs().format('dddd, MMMM D, YYYY')
$("#currentDay").text(today)

// show time blocks for standard business hours
// color code time block to indicate past, present or future
// enter event details on time block click
// save event details to local storage