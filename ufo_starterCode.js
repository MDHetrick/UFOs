// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.


// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.

    // 4b. Save the value that was changed as a variable.

    // 4c. Save the id of the filter that was changed as a variable.

  
    // 5. If a filter value was entered then add that filterId and value to the filters list. Otherwise, clear that filter from the filters object.
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  //  id = shape
  // value = circle
  // filter = {shape : circle}
  function filterRow(row){  // take filtered data and send each row through this
    return row[id] == value; // give me the rows for each id (shape) that have values that match that value (circle) from filters
  };

    for (id in filters) {               // for each key in the filters thing
      var value = filters[id];          // the value is the one that has been inputted for that specific id -> example, the value for shape is circle
      filteredData = filteredData.filter(filterRow);  // we want to change our filtered data to the filtered data that has been sent through the filter row 
  
    }
  

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  }
  
  // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
  buildTable(tableData);
