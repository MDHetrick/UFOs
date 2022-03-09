
console.log('---BEGIN----')
const tableData = data;


var tbody = d3.select("tbody");

function buildTable(data) {

  tbody.html("");


  data.forEach((dataRow) => {

    let row = tbody.append("tr");


    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filtersObj = [];

// 3. Use this function to update the filters. 
function updateFilters() {

  // 4a. Save the element that was changed as a variable.
  let element = d3.select(this);
  console.log(element)

  // 4b. Save the value that was changed as a variable.
  let variable = element.property('value');
  console.log(variable)

  // 4c. Save the id of the filter that was changed as a variable.
  let id = document.getElementById('table')
  console.log(id)
  
  // 5. If a filter value was entered then add that filterId and value to the filters list. Otherwise, clear that filter from the filters object.
  if (id) {                                                                                 //? how would it get into the filters list?
    filtersObj = filtersObj.filter(row => row.id === variable);
    console.log(id);
    };
  // 6. Call function to apply all filters and rebuild the table
  updateFilters(filtersObj);
  
  
// 7. Use this function to filter the table when data is entered.
 function filterTable() {
  
  // 8. Set the filtered data to the tableData.
  

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  

  // 10. Finally, rebuild the table using the filtered data
  
}

// 2. Attach an event to listen for changes to each filter


// Build the table when the page loads
buildTable(tableData);

/////////////////////////////////////////////////////////////////////////////////////////////  

function filterTable() {
  let filteredData = tableData
  
  filteredData.forEach((filteredData) =>{ // cannot read properties of undefined
    let row = tbody.append('tr');
    Object.values(dataRow).forEach((val) => { 
      let cell = row.append("td");
      cell.text(val);
    }
    );
  }
  );
  buildTable(filteredData);

  
   
  }
}
