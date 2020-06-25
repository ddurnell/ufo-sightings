// from data.js
var tableData = data;
// console.log(tableData);

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Function to add the table, filtered or not
function addTable(td) {
    // Wipe the table if there is one
    tbody.html("")

    // Add the table
    // weather report values (datetime, city, state, country, shape, durationMinutes, comments)
    // Loop through the array of ufo sighting objects
    td.forEach(function (ufoSighting) {
        // console.log(ufoSighting);
        // add a table row
        var row = tbody.append("tr");
        // we know the structure so just get the values
        Object.values(ufoSighting).forEach((value) => {
            // console.log(value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

addTable(tableData);

// Filter the data based on user form input

// Select the button
var button = d3.select("#filter-btn");

var filteredData = data;
// listen for the button click event and do...
button.on("click", function() {

    // Get anthing that was inputted
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");
    console.log(`date: ${date}, city: ${city}, state: ${state}, country: ${country}, shape: ${shape}`);
    
    // filter date
    if (date != ""){
        filteredData = filteredData.filter(ufo => ufo.datetime === date);
    }
    // filter city
    if (city != ""){
        filteredData = filteredData.filter(ufo => ufo.city === city);
    }
    // filter state
    if (state != ""){
        filteredData = filteredData.filter(ufo => ufo.state === state);
    }    
    // filter country
    if (country != ""){
        filteredData = filteredData.filter(ufo => ufo.country === country);
    }    
    // filter shape
    if (shape != ""){
        filteredData = filteredData.filter(ufo => ufo.shape === shape);
    }

    // console.log(filteredData);

    // add the filtered table
    addTable(filteredData);
});
  

