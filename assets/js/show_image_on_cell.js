
$(document).ready(function () {
    $('#users').DataTable({
        ajax: {
            url: "./assets/data/users_images_url.json"
       }, 
        columns:[
            {name: "id", data: "id"},
            {name: "avatar", data: "avatar"},
            {name: "name", data: "name"},
            {name: "email", data: "email"}
            
        ]
    })
})
