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
        $("body").css("background-image","url(http://20px.com/wp-content/uploads/2013/02/unicorn_pooping_a_rainbow_20px.jpg)");
        $("#btnGuess").hide(); // hides the guess button when you get it right 
        $("#resetBtn").show();
    }
    else {
        $("#message").text("Nope");
         //sets text to value
        $("#txtBoxGuess").val("");
        $("body").css("background-image","url(http://www.cluburban.com/media/catalog/product/p/o/poop-emoji-phone-charger_1.jpg)");
        $("#resetBtn").show();
}
    $("#txtBoxGuess").focus();
}

//set up the page for the game.
function playGame(){
    //set divs 
    $("#intro").hide();
    $("#game").show();
    //set focus
    $("#txtBoxGuess").focus();
    $("#resetBtn").hide();
}


// when page loads, setup the game
$(function(){
    //wire up event handlers,
    $("#startGame").on("click",playGame);
    $("#btnGuess").on("click",handleGuess);
    //start the game
    setupGame();
    $("#resetBtn").on("click",function(){ // starts the game over 
        location.reload();
    });
     $("body").css("background-color", "grey");
     $("body").css("text-align", "center");
});