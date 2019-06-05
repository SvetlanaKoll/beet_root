const Url = 'http://127.0.0.1:5500/AJAX_2/employees.json'
$(document).ready(function(){

    $.get(Url,function(data,status){
        $("#employeeList").append('<ul class="bulleted">')
        for (var obj in data) {
            var nameClass = '';
            if (data[obj].inoffice == true){
                nameClass = 'in';
            }else{
                nameClass = 'out';
            }

            $(".bulleted").append(`<li class="${nameClass}">${data[obj].name}</li>`);
            console.log(`${nameClass} ${data[obj].name}`);
            
        }
    })
})