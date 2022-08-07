
$(document).ready(function () {
    $('#users').DataTable({
        ajax: {

            url: "./users.json"
       }, 
        columns:[
            {name: "id", data: "id"},
            {name: "name", data: "name"},
            {name: "email", data: "email"},
            {name: "lastname", data: "lastname"}
        ],
        //ordering columns
        // column number (0 is first column)
        //"searcheable": false, 
        //"visible": false
        columnDefs: [
            {
                targets: [1],render: function (data, type, row) {
                    return data + ' ' + row.lastname;
                },
            },
            { visible: false, targets: [3] },
        ],
    })

    $('#products').DataTable({
        ajax: {
            url: "./products.json"
       },
        columns:[
            {name: "id", data: "id"},
            {name: "name", data: "name"},
            {name: "price", data: "price"}
        ]

    })
})
