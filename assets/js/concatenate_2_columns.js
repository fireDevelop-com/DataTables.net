
$(document).ready(function () {
    $('#users').DataTable({
        ajax: {
            url: "./assets/data/users.json"
       }, 
        columns:[
            {name: "id", data: "id"},
            {name: "name", data: "name"},
            {name: "email", data: "email"},
            {name: "lastname", data: "lastname"}
        ],
        columnDefs: [
            {
                targets: [1],render: function (data, type, row) {
                    return data + ' ' + row.lastname;
                },
            },
            { visible: false, targets: [3] }, // hide column 4
        ],
    })
})
