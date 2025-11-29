function prepareEventDetails(event) {
  return {
    "num_of_elements": 1, 
    "element_names": ["title"],
    "element_values": [event.getTitle()]
  }
}

function addEventToSheet(sheet, event) {
  
  var eventDetails = prepareEventDetails(event);
  
  // !INFO: currently always inserting in row 2 
  // TODO: implement different insertation techniques
  var insertBeforeRow = 2;

  if (insertBeforeRow > sheet.getMaxRows()) {
    sheet.insertRowAfter(insertBeforeRow - 1);
  } else {
    sheet.insertRowBefore(insertBeforeRow);
  }

  for (var i = 1; i <= eventDetails.num_of_elements; i++) {
    sheet.getRange(insertBeforeRow, i).setValue(eventDetails.element_values[i]);
  }

}

function populateEventsSheet(sheet, events) {
  for (var event of events) {
    addEventToSheet(sheet, event);
  }
}
