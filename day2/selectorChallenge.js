$(function() { //document ready



$("#p1:contains('paragraph')").on("click",function(){
        $(this).hide() //hides paragraph on click
 });
$("h3").on("dblclick", function(){
    $(alert("Hello there")); // displays hello there on double click of h3
});
$("body").on("dblclick", function(){
    $(this).css("background-color", "grey"); //double click makes background grey 

});
$("li").first().on("mouseenter",function(){
    $(this).css("background-color", "red"); // mouse enter on L1 makes l1 red
});
$("li").first().on("mouseleave",function(){
    $(this).css("background-color", "white"); //mouse leave on l1 makes l1 white again.
});
$("h1").css("font-size", "100px");
$("h1").css("color", "red");

});

