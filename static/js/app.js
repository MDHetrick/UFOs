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
  filterDataForeach();
}
  

function filterTable() {

  let filteredData = tableData
  for (id in filters) {             
      var value = filters[id];
      filteredData = filteredData.filter(row => row[id] == value);
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

d3.selectAll("input").on("change", updateFilters);
buildTable(tableData);

