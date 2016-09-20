


$(function() {
$("#p1:contains('paragraph')").on("click",function(){
        $(this).hide()
 });
$("h3").on("dblclick", function(){
    $(alert("Hello there"));
});
$("li").first().on("mouseenter",function(){
    $(this).css("background-color", "red");
});
$("li").first().on("mouseleave",function(){
    $(this).css("background-color", "white");
});

});

