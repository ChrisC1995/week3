//create a varibale to hold the answer
var answer;


//set up the game.
function setupGame(){
    //clear out old values.
    $('#txtBoxGuess').val(""); // sets value to 0 
    $('#message').val("");
    //come up with the answer.
    answer = parseInt(Math.random() * 10); // random numbers till 10
    console.log(answer);
    // Show the appropriate divs.
    $("#intro").show();
    $("#game").hide();
    $("#resetBtn").hide();

    //focus mouse on text box
}


//handle the guess.
function handleGuess(){
    var guess = $("#txtBoxGuess").val(); // gets val from form 
    if(+guess == answer) {
        $("#message").text("You're right");
    }
    else {
        $("#message").text("Nope");
         //sets text to value
        $("#txtBoxGuess").val("");
}
    $("#txtBoxGuess").focus();
}

//set up the page for the game.
function playGame(){
    //set divs 
    $("#intro").hide();
    $("#game").show();
    $("#resetBtn").show();
    //set focus
    $("#txtBoxGuess").focus();
}


// when page loads, setup the game
$(function(){
    //wire up event handlers,
    $("#startGame").on("click",playGame);
    $("#btnGuess").on("click",handleGuess);
    //start the game
    setupGame();
    $("#reset").on("click",function(){
        location.reload();
    });
     $("body").css("background-color", "grey");
     $("body").css("text-align", "center");
});