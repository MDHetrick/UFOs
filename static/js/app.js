
console.log('---BEGIN----')
const tableData = data;



function buildTable(data) {
  var tbody = d3.select("tbody");
  tbody.html("");
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

var filters = {};

function updateFilters() {
  let element = d3.select(this);
  let variable = element.property('value');
  let id = element.attr('id');        
  if (variable !== '') { 
    filters[id] = variable;
  }
  else {
    delete filters[id];
  };
  // filterTable();
  filterDataForeach();
}
  
// 7. Use this function to filter the table when data is entered.
// write code to filter the table based on the user input that is stored in the filters variable.

 ////////////////////////////////////////////////////////////////////////////////
  // function filterRow(row){  // take filtered data and send each row through this
  //   console.log('HERE IS MY ROW')
  //   console.log(row)
  //   if (row[id] == value) {
  //     console.log('------------------row[id] value-----------------')
  //     console.log(value)
  //     return row[id] == value; // give me the rows for each id (shape) that have values that match that value (circle) from filters
  //   }
  //   else {
  //     console.log('------------------row[id] under else-----------------')
  //     console.log(row[id])
  //   } 
  // };
  // }
  //   for (id in filters) {               // for each key in the filters thing
  //     var value = filters[id];          // the value is the one that has been inputted for that specific id -> example, the value for shape is circle
  //     console.log("--------------value that we set is below--------------")
  //     console.log(value)
  //     filteredData = filteredData.filter(filterRow);  // we want to change our filtered data to the filtered data that has been sent through the filter row 
///////////////////////////////////////////////////////////////////////////////////////
function filterTable() {

  let filteredData = tableData
  for (id in filters) {               // for each key in the filters thing
      var value = filters[id];
      filteredData = filteredData.filter(row => row[id] == value);
       // the value is the one that has been inputted for that specific id -> example, the value for shape is circle
  }
  buildTable(filteredData)
}

function filterDataForeach() {
  let filteredData = tableData
  Object.entries(filters).forEach(([id, val]) => 
    filteredData = filteredData.filter(row => row[id] == val)
  );
  buildTable(filteredData)
}
  // for (id in filters) {               // for each key in the filters thing
  //     var value = filters[id];
  //     filteredData = filteredData.filter(row => row[id] == value);
       // the value is the one that has been inputted for that specific id -> example, the value for shape is circle

  // buildTable(filteredData)



d3.selectAll("input").on("change", updateFilters);
buildTable(tableData);

