var buttons = [ "green","red", "blue", "yellow"];
var level = 0;
var sequence = [];
var stateGreen = 0, stateRed = 0, stateYellow = 0, stateBlue = 0;
var counter;
var audioGreen=new Audio("sounds/green.mp3");
var audioRed=new Audio("sounds/red.mp3");
var audioBlue=new Audio("sounds/blue.mp3");
var audioYellow=new Audio("sounds/yellow.mp3");
var audioWrong=new Audio("sounds/wrong.mp3");
var audios=[audioGreen,audioRed,audioBlue,audioYellow];
$(document).keydown((event) => {
    //only if level is 0 then start a new game
    if (level === 0) {
        $("body").removeClass("game-over");
        level++;
        if (event.keyCode) {
            $("h1").text("Level " + level);
        }
        //start the game
        generateSequence();
    }
});
$("h1").click(()=>{
    if (level === 0) {
        
            $("body").removeClass("game-over");
            level++;
            $("h1").text("Level " + level);
        
        //start the game
        generateSequence();
    }
});
function generateSequence() {
    //choose randomly from four colors
    var choose = Math.floor(Math.random() * 4);
    sequence.push(buttons[choose]);

    setTimeout(()=>{
        //play its sound
    audios[choose].play();

    //animation
    $("." + buttons[choose]).addClass("pressed");
    setTimeout(() => {
        $("." + buttons[choose]).removeClass("pressed");
    }, 300);

    },1000);
    
    //get user response
    counter = 0;
    getUserSequence(counter);
}

function getUserSequence(counter) {
    if (counter < sequence.length) {
        //set the state of the required color in response to 1
        if (sequence[counter] === "green") {
            stateGreen = 1;
        }
        else if (sequence[counter] === "red") {
            stateRed = 1;
        }
        else if (sequence[counter] === "blue") {
            stateBlue = 1;
        }
        else {
            stateYellow = 1;
        }
    }

}

$(".blue").click(() => {

    //choose that the button is right or wrong in the sequence
    if (stateBlue === 1) 
        audioBlue.play();
        stateBlue = 0;
        
        // if its last of the sequence than start the next level 
        if (counter == sequence.length - 1) {
            counter=0;
            generateSequence();
            $("h1").text("Level " + (++level));

        }
        else
            getUserSequence(++counter);
    }
    else {
        audioWrong.play();
        $("body").addClass("game-over");
        sequence = [];
        $("h1").text("Game over! Press any key to restart");
        level=0;
    }
});

$(".red").click(() => {

    //choose that the button is right or wrong in the sequence
    if (stateRed === 1) {
        audioRed.play();
        stateRed = 0;
        if (counter == sequence.length - 1) {
            counter=0;
            generateSequence();
            $("h1").text("Level " + (++level));
        }
        else
            getUserSequence(++counter);
    }
    else {
        audioWrong.play();
        $("body").addClass("game-over");
        sequence = [];
        $("h1").text("Game over! Press any key to restart");
        level=0;
    }
});

$(".green").click(() => {

    //choose that the button is right or wrong in the sequence
    if (stateGreen === 1) {
        audioGreen.play();
        stateGreen = 0;
        if (counter == sequence.length - 1) {
            counter=0;
            generateSequence();
            $("h1").text("Level " + (++level));
        }
        else
            getUserSequence(++counter);
    }
    else {
        audioWrong.play();
        $("body").addClass("game-over");
        sequence = [];
        $("h1").text("Game over! Press any key to restart");
        level=0;
    }
});

$(".yellow").click(() => {

    //choose that the button is right or wrong in the sequence
    if (stateYellow === 1) {
        audioYellow.play();
        stateYellow = 0;
        if (counter == sequence.length - 1) {
            counter=0;
            generateSequence();
            $("h1").text("Level " + (++level));
        }
        else
            getUserSequence(++counter);
    }
    else {
        audioWrong.play();
        $("body").addClass("game-over");
        sequence = [];
        $("h1").text("Game over! Press any key to restart");
        level=0;
    }
});
