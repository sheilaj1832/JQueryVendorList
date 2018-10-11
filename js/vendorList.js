$().ready(function() {

    var url = "http://localhost:8080/Vendors/List"

    $.getJSON(url)
    .then(function (jsonResponse) {
        console.log(jsonResponse);
        render(jsonResponse)
    });
});

function render(jsonResponse) {
    var tbody = $("#tbody");
    var vendors = jsonResponse.data;

    //for loop
    for (var vendor of vendors) {
        var row = "<tr>";
        row += "<td>" + vendor.id + "</td>";
        row += "<td>" + vendor.code + "</td>";
        row += "<td>" + vendor.name + "</td>";
        row += "<td>" + vendor.address + ", "+ vendor.city+", "+vendor.state +" "+vendor.zip + "</td>";
        row += "<td>" + vendor.phoneNumber + "</td>";
        row += "<td>" + vendor.email + "</td>";
        row += "</tr>";
        tbody.append(row);
    }
}
