$(document).ready(function(){
    $(".segmented label input[type=radio]").each(function(){
        $(this).on("change", function(){
            if($(this).is(":checked")){
               $(this).parent().siblings().each(function(){
                    $(this).removeClass("checked");
                });
                $(this).parent().addClass("checked");
            }
        });
    });
});
function myJavascriptFunction() {
    // Your javascript code to bring data from database.
    
    $.ajax({
        type: "GET",
        url: "http://api.plos.org/search?q=title:DNA",
//         data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        async: false,
        success: function(data){
            alert("Credit card details." + data);
                },
        error: function (err) {
           // alert("An error has occured. Please try again."+err.ResponseText);
        }
    });
 
}
