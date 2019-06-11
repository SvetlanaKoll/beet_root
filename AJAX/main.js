const Url ='http://127.0.0.1:5500/AJAX/phones.json';
$(`#btn`).click(function() {
    $.get(Url, function(data, status){
        for (var prop in data){

            const $phones = `<li>${prop} : ${data[prop]}</li>`; 
            $("#output").append($phones);
        }


        
    }); 
});