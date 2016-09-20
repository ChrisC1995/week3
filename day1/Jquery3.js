function myButton_Click(){
    alert("clicked!");
}

$(function() {
    // Wire up the click event handler // easier way to initiaize functions in jquery 

    $('#myButton').on("click", myButton_Click); // select my button, on whatever event(click), call this function (myButton_click)

    // hides mad when it is clicked
    $("li:contains('mad')").on("click",function(){ // if list items contain mad, on click hide mad.
        $(this).hide();
    });

});