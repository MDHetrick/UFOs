
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
  let id = element.attr('id')        
  if (variable !== '') { 
    filters[id] = variable;
  }
  else {
    delete filters[id];
  };
  filterTable()
}
  
// 7. Use this function to filter the table when data is entered.
// write code to filter the table based on the user input that is stored in the filters variable.
function filterTable() {

  let filteredData = tableData 

  /* loop through the filters object and store the data that matches the filter 
  values in the variable created in Step 8.
  
  for each item ID in filters, look through tableData 
  and see if the VALUE exists and add it to filteredData 
  */   
  // Object.entries(filters)  => {      // in filters, for each id
    // Object.values(dataRow).forEach((variable) => {
    //   filteredData = filteredData.filter(row => row.id === variable)
    // }) 

  function filterRow(row){
    if (row[id] == value) {
    return true;
    };
  };

  var filterArray = Object.entries(filters);
  filterArray.forEach(([id, value]) => {
  

    

    console.log(`k = ${id} v = ${value}`);
  });
  
buildTable(filteredData)

}
 

d3.selectAll("input").on("change", updateFilters);
buildTable(tableData);

