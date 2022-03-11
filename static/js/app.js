
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

// 1. Create a variable to keep track of all the filters as an object.}

var filters = {};
console.log('filtersobj begin:')
console.log(filters)

// 3. Use this function to update the filters. 
function updateFilters() {
  console.log('beginning update filters function')
  console.log(filters)
  // 4a. Save the element that was changed as a variable.
  let element = d3.select(this);
  console.log('emelemt from updatefilters:')
  console.log(element)

  // 4b. Save the value that was changed as a variable.
  let variable = element.property('value');
  console.log('variable from updatefilters:')
  console.log(variable)

  // 4c. Save the id of the filter that was changed as a variable.
  let id = element.attr('id') //"id"
  console.log('id from updatefilters:')
  console.log(id)
  
  // 5. If a filter value was entered then add that filterId and value to the filters list. 
    // filtersObj[id] = id;              
  if (variable !== '') { 
    filters[id] = variable;
    console.log('id & variable added')
    console.log(filters)
    // filtersObj['id'].property() = id //add element's id as property???
    // filtersObj['value'] = variable
    }
  else {
    delete filters[id];
    console.log('deleted')
    // delete filtersObj['id'];
    // delete filtersObj['value']}; //Otherwise, clear that filter from the filters object. 
                                  // ?????????????? why would we clear it if it was initialized as empty? 
                                  //? how would it get into the filters list?

};
  console.log('end filters function');
  filterTable()
  console.log('filtersobj from updatefilters:');
  console.log(filters);

}
  
// 7. Use this function to filter the table when data is entered.
function filterTable() {
  
  // 8. Set the filtered data to the tableData.
  console.log('filtersobj filtertable')
  console.log(filters)
  
  let filteredData = tableData // what is filtered data
  console.log('filteredData - begin filter Table function')
  console.log(filteredData)

   let row = tbody.append('tr');
                  // filteredData??
    if (filters){
      Object.keys(filters).forEach((id) => {
      let input = d3.select("#"+id).property("value");
      filteredData = filteredData.filter(row => row["#"+id] === input);
      let cell = row.append("td");
      cell.text(filters)
    }
    );  
     }   buildTable(filteredData)
     console.log("is filtered data empty??????")
     console.log(filteredData)
}
 

d3.selectAll("input").on("change", updateFilters);
buildTable(tableData);

