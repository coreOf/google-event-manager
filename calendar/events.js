function filterEvents(calendarId, searchTerm, start, end) {
  var events = CalendarApp.getCalendarById(calendarId).getEvents(start, end, {search: searchTerm});
  return events
}
