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
                                //alert("Credit card details.");
                                var ccnumber = $("#ccnumber").val();
                                $.ajax({
                                       type: "GET",
                                       url: "https://reqres.in/api/users?page=2",
                                       data: {},
                                       contentType: "application/json; charset=utf-8",
                                       dataType: "json",
                                       cache: false,
                                       async: false,
                                       success: function(data){
                                       debugger
                                       $.each(data.data,function(index,item){
                                              console.log(item.email);
                                              });
                                       //alert("Credit card details." + data);
                                       },
                                       error: function (err) {
                                       debugger
                                       alert("An error has occured. Please try again."+err.ResponseText);
                                       }
                                       });
                            }
