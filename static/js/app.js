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

// 4(1.) Create a variable to keep track of all the filters as an object.
var filtersObj;
// 5  - The updateFilters() function will replace your handleClick() function 
//      and update the filters variable you created in Step 1.
//    - The filterTable() function will filter the table data 
//      by the value that is entered for the "id" that has changed.
// 6  - For Step 2, located before the buildTable(tableData) 
//      function at the end of the starter code, modify the event listener from this module 
//      so that it detects a "change" on each input element and calls the updateFilters() function.
// 7  - In Step 3, we’ve provided the function, updateFilters(). 
//      Inside this function, you’ll write code in Steps 4-5 
//      to update the filters based on user input.
// 8  - In Step 4a, create a variable that saves the element that was changed using d3.select(this).
// 9  - In Step 4b, create a variable that saves the value of the changed element’s property.
// 10 - In Step 4c, create a variable that saves the attribute of the changed element’s id.
// 11 - In Step 5, write an if-else statement that checks if a value was changed by the user (variable from Step 4b). 
//      If a value was changed, add the element’s id (variable from Step 4c) as 
//      the property and the value that was changed to the filters variable you created in Step 1. 
//      If a value was not entered, then clear the element id from the filters variable.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  3. Use this function to update the filters. -------- replaces handle click
// function updateFilters() {

//     // 4a. Save the element that was changed as a variable.
//     let element = de.select(this);
//     console.log(element)

//     // 4b. Save the value that was changed as a variable.
//     let variable = element.property('value');
//     console.log(variable)

//     // 4c. Save the id of the filter that was changed as a variable.
//     let id = 
//     console.log(id)
  
//     // 5. If a filter value was entered then add that filterId and value
//     // to the filters list. Otherwise, clear that filter from the filters object.

//     if (date) {     // if a date was entered...


//     };

  
//     // 6. Call function to apply all filters and rebuild the table
//     filterTable(filteredData);
  
//   }
  
//   // 7. Use this function to filter the table when data is entered. ----build table
//   function filterTable() {
  
//     // 8. Set the filtered data to the tableData.
    
  
//     // 9. Loop through all of the filters and keep any data that
//     // matches the filter values
    
  
//     // 10. Finally, rebuild the table using the filtered data
    
//   }
  
//   // 2. Attach an event to listen for changes to each filter 
// // modify the event listener from this module 
// // so that it detects a "change" on each input element and calls the updateFilters() function.
//   d3.selectAll("#filter-btn").on("click", updateFilters);
  
//   // Build the table when the page loads
//   buildTable(tableData)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 5  - The updateFilters() function will replace your handleClick() function 
// //      and update the filters variable you created in Step 1.
// //    - The filterTable() function will filter the table data 
// //      by the value that is entered for the "id" that has changed.
// // 6  - For Step 2, located before the buildTable(tableData) 
// //      function at the end of the starter code, modify the event listener from this module 
// //      so that it detects a "change" on each input element and calls the updateFilters() function.
// // 7  - In Step 3, we’ve provided the function, updateFilters(). 
// //      Inside this function, you’ll write code in Steps 4-5 
// //      to update the filters based on user input.
// // 8  - In Step 4a, create a variable that saves the element that was changed using d3.select(this).
// // 9  - In Step 4b, create a variable that saves the value of the changed element’s property.
// // 10 - In Step 4c, create a variable that saves the attribute of the changed element’s id.
// // 11 - In Step 5, write an if-else statement that checks if a value was changed by the user (variable from Step 4b). 
// //      If a value was changed, add the element’s id (variable from Step 4c) as 
// //      the property and the value that was changed to the filters variable you created in Step 1. 
// //      If a value was not entered, then clear the element id from the filters variable.

// // 3. Use this function to update the filters. -------- replaces handle click
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let shape = d3.select("#shape").property("value");
 
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.

    if (date) {     // if a date was entered...

      filteredData = filteredData.filter(row => row.datetime === date);   // build a filtered data table where the tatetime value = filtered value
    };
    if (city) {     // if a city was entered...

      filteredData = filteredData.filter(row => row.city === city);  
    };
    if (state) {     // if a state was entered...

      filteredData = filteredData.filter(row => row.state === state);  
    };
    if (shape) {     // if a shape was entered...

      filteredData = filteredData.filter(row => row.shape === shape);  
    }; 
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable(filteredData);
  
  }
  
  // 7. Use this function to filter the table when data is entered. ----build table
  // function filterTable() {
    

    
  //   // 8. Set the filtered data to the tableData.
    
  
  //   // 9. Loop through all of the filters and keep any data that
  //   // matches the filter values
    
  
  //   // 10. Finally, rebuild the table using the filtered data
    
  // }
  
  // 2. Attach an event to listen for changes to each filter 
// modify the event listener from this module 
// so that it detects a "change" on each input element and calls the updateFilters() function.
  d3.selectAll("#filter-btn").on("click", buildTable);
  
  // Build the table when the page loads
  buildTable(tableData);
