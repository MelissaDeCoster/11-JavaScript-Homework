// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = data.filter(sighting => sighting.datetime === inputValue);

    tbody.html("");

    if (filteredData.length !== 0) {
        console.log(filteredData);

        //Add Filtered Data to the table
        filteredData.forEach(sighting => {
            var row = tbody.append("tr");
            columns.forEach(column => row.append("td").text(sighting[column])
            )
        })
    }
    else if (filteredData.length === 0) {
        alert("This Selection did not yield any search results! Try again!");
    }

});
