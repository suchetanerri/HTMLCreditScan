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
        url: "https://websvcdev.cleanharbors.com/MobileInventoryService/IBCFulfill/IBCFulfillDetails/21B520XIBC350/97BPO/BPO",
//         data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        async: false,
        success: function(data){

                },
        error: function (err) {
           // alert("An error has occured. Please try again."+err.ResponseText);
        }
    });
 
}
