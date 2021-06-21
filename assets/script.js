//loveday-coding-quiz by Jack Loveday 20-16-21

console.log("|Program is running..");
local = window.localStorage;
localTotal = local.length;
console.log("|set local storage to 'local', holding " + localTotal + " items current");


//Declare Global Variables
let timeCount = 0;
let qTracker = 0;
let score = 0;
let wrongTracker = 0;
let tempScore = 0;

//Questions:
let qArray = ["Commonly used data types DO NOT include:",                                                             // strings, booleans, *alerts, numbers
    "The condition if an if / else statement is enclosed with __________.",                                 // quotes, curly brackets, *parenthesis, square brackets
    "Arrays in JavaScript can be used to store ______.",                                                    // numbers & strings, other arrays, booleans, *all of the above
    "String values must be enclosed withing ______ when being assigned to variables.",                      // commas, curly brackets, *quotes, parenthesis
    "A very useful tool used during development and debugging for printing content to the debugger is:"];   // Javascript, terminal/bash, for loops, *console.log

//Question 1 Answers:
let q1Answers = ["strings", "booleans", "alerts", "numbers"];
//Question 2 Answers:
let q2Answers = ["quotes", "curly brackets", "parenthesis", "square brackets"];
//Question 3 Answers:
let q3Answers = ["numbers & strings", "other arrays", "booleans", "all of the above"];
//Question 4 Answers:
let q4Answers = ["commas", "curly brackets", "quotes", "parenthesis"];
//Question 5 Answers:
let q5Answers = ["JavaScript", "terminal/bash", "for loops", "console.log"];


//Hide other divs until needed
$("#a1").hide();
$("#a2").hide();
$("#a3").hide();
$("#a4").hide();
$("#scoreBoard").hide();
$("#scoreButtons").hide();
$("#nameForm").hide();

//Listener for when startButton is clicked.
$("#startButton").click(function () {
    console.log(" |startButton clicked!");
    score = 75;
    //First thing: Start the timer!
    console.log(" |starting startTimer()...");
    startTimer(score);
    console.log(" |finished startTimer()...");

    //Next Let's start the game!
    console.log(" |starting startQuiz()...");
    //Reset Question Tracker
    qTracker = 0;
    initQuiz();


});

function initQuiz() {
    console.log("  |initQuiz() is running...");

    //Let's change the text and button views.
    console.log("  |cleaning up text and buttons...");
    $("#topText").html("");
    $("#questionText").html("");
    $("#startButton").hide();

    //Show Answer Buttons
    $("#a1").show();
    $("#a2").show();
    $("#a3").show();
    $("#a4").show();
    $("#hsButton").hide();

    runQuiz();
}

function closeQuiz() {

    //Show Answer Buttons
    $("#a1").hide();
    $("#a2").hide();
    $("#a3").hide();
    $("#a4").hide();
    $("#hiddenBottomText").html("");

    console.log("  |closeQuiz() is running...");
    if (timeCount > 0) {
        console.log("   |starting enterHighscore()...");
        score = timeCount;
        enterHighscore(score);
    } else {
        //Let's change the text and button views.
        console.log("  |cleaning up text and buttons...");
        $("#topText").html("<h1>Coding Quiz Challenge</h1>");
        $("#questionText").html("<br><p>Try to answer the following code-related questions within the time limit.</p><p>Keep in mind that incorrect answers will penalize your score/time by 10 seconds!</p>");
        $("#startButton").show();
        $("#hsButton").show();
        $("#scoreBoard").hide();
        $("#nameForm").hide();
    }
    timeCount = 0;
    return;
}

function runQuiz() {
    //Function to start the quiz/game!
    console.log("  |startQuiz() is running...");

    //Check current question
    console.log("  |current question value: " + qTracker);

    if (qTracker > 4) {
        closeQuiz();
        return;
    }

    //Call set button function
    console.log("  |starting setQuestions()...");
    setQuestions(qTracker);
    console.log("  |finished setQuestions()...");
    console.log("  |waiting for input...");
}

//Highscore submission
function enterHighscore(s) {
    tempScore = s;

    //Set Text elements
    $("#topText").html("<h1>All done!</h1>");
    $("#questionText").html("Your final score is: " + tempScore);
    $("#nameForm").show();
}

//Submit Listener:
$("#submit").click(() => {
    let tempName = $("#uname").val();
    addScore(tempName, tempScore);
    viewHighscores();
});

//Button Listeners:
$("#a1").click(() => {
    console.log("   |a1 clicked...");

    if (qTracker == 0) {
        qTracker++;
        console.log("    |a1 for q1 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 1) {
        qTracker++;
        console.log("    |a1 for q2 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 2) {
        qTracker++;
        console.log("    |a1 for q3 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 3) {
        qTracker++;
        console.log("    |a1 for q4 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 4) {
        qTracker++;
        console.log("    |a1 for q5 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    };
});

$("#a2").click(() => {
    console.log("   |a2 clicked...");

    if (qTracker == 0) {
        qTracker++;
        console.log("    |a2 for q1 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 1) {
        qTracker++;
        console.log("    |a2 for q2 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 2) {
        qTracker++;
        console.log("    |a2 for q3 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 3) {
        qTracker++;
        console.log("    |a2 for q4 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 4) {
        qTracker++;
        console.log("    |a2 for q5 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    };
});

$("#a3").click(() => {
    console.log("   |a3 clicked...");

    if (qTracker == 0) {
        qTracker++;
        console.log("    |a3 for q1 clicked...");

        //Clicked the correct answer!
        console.log("    |correct answer!");
        console.log("    |starting correctAnswer()...");
        correctAnswer();
        runQuiz();
    }
    else if (qTracker == 1) {
        qTracker++;
        console.log("    |a3 for q2 clicked...");

        //Clicked the correct answer!
        console.log("    |correct answer!");
        console.log("    |starting correctAnswer()...");
        correctAnswer();
        runQuiz();
    }
    else if (qTracker == 2) {
        qTracker++;
        console.log("    |a3 for q3 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 3) {
        qTracker++;
        console.log("    |a3 for q4 clicked...");

        //Clicked the correct answer!
        console.log("    |correct answer!");
        console.log("    |starting correctAnswer()...");
        correctAnswer();
        runQuiz();
    }
    else if (qTracker == 4) {
        qTracker++;
        console.log("    |a3 for q5 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    };
});

$("#a4").click(() => {
    console.log("   |a4 clicked...");

    if (qTracker == 0) {
        qTracker++;
        console.log("    |a4 for q1 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 1) {
        qTracker++;
        console.log("    |a4 for q2 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 2) {
        qTracker++;
        console.log("    |a4 for q3 clicked...");

        //Clicked the correct answer!
        console.log("    |correct answer!");
        console.log("    |starting correctAnswer()...");
        correctAnswer();
        runQuiz();
    }
    else if (qTracker == 3) {
        qTracker++;
        console.log("    |a4 for q4 clicked...");

        //Clicked the wrong answer!
        console.log("    |wrong answer!");
        console.log("    |starting wrongAnswer()...");
        wrongAnswer();
        runQuiz();
    }
    else if (qTracker == 4) {
        qTracker++;
        console.log("    |a3 for q5 clicked...");

        //Clicked the correct answer!
        console.log("    |correct answer!");
        console.log("    |starting correctAnswer()...");
        correctAnswer();
        runQuiz();
    };
});

//Highscore Listener
$("#hsButton").click(() => {
    viewHighscores();
});

$("#back").click(() => {
    $("#scoreButtons").hide();
    $("#scoreBoard").html("");
    closeQuiz();
});

$("#clear").click(() => {
    local.clear();
    $("#scoreButtons").hide();
    closeQuiz();
    location.reload();
});

function viewHighscores() {
    $("#hsButton").hide();
    $("#startButton").hide();
    $("#topText").html("<h1>High scores:</h1>");
    $("#nameForm").hide();
    $("#nameForm").val("");
    $("#questionText").html("");
    $("#scoreBoard").show();
    $("#scoreButtons").show();

    //Check if there are scores to display
    if (localTotal > 0) {
        setScores();
    }

}

function setScores() {
    let scoreArray = [];

    for (let i = 0; i < localTotal+1; i++) {
        let holder = JSON.parse(local.getItem([i]));
        if (holder == null) {
            console.log("Empty Value");
        } else {
            scoreArray[i] = holder;
            console.log(scoreArray[i]);
        }
    }

    if (scoreArray.length > 0) {
        console.log("Array has contents.");
        $("#scoreBoard").append("<ol>");
        for (let i = 0; i < localTotal+1; i++) {
            if (scoreArray[i] == null) {
                //Do nothing
            } else {
                let tempObj = scoreArray[i];
                $("#scoreBoard").append("<li>" + tempObj.newName + " - " + tempObj.newScore + "</li>");
            }
        }
        $("#scoreBoard").append("</ol>");
    }



}


function addScore(newName, newScore) {
    let key = localTotal + 1;
    let highScore = { newName, newScore };
    local.setItem(key, JSON.stringify(highScore));
    console.log(local.getItem(key));
    localTotal++;
}


function wrongAnswer() {
    console.log("     |wrongAnswer() is running...");
    console.log("     |adjusting hidden text...");
    $("#hiddenBottomText").html("<br><h4><i>Incorrect..</i></h4>")
    console.log("     |adjusting time...");
    for (let i = 0; i < 10; i++) {
        timeCount--;
    }
    wrongTracker++;
    console.log("     |moving to next question...");
}

function correctAnswer() {
    console.log("     |correctAnswer() is running...");
    console.log("     |adjusting hidden text...");
    $("#hiddenBottomText").html("<br><h4><i>Correct..</i></h4>")
    console.log("     |moving to next question...");
}


function setQuestions(num) {
    console.log("    |setQuestions() is running...");

    //Determine Questions & Answers based on num
    let thisQuestion = qArray[num];
    console.log("    |thisQuestion = " + thisQuestion);
    $("#topText").html("<h1>" + thisQuestion + "</h1>");

    //If we're on Question 1:
    if (num == 0) {
        console.log("     |setting text for Question 1...");
        $("#a1").html("a) " + q1Answers[0]);
        $("#a2").html("b) " + q1Answers[1]);
        $("#a3").html("c) " + q1Answers[2]);
        $("#a4").html("d) " + q1Answers[3]);
    }

    //If we're on Question 2:
    if (num == 1) {
        console.log("     |setting text for Question 2...");
        $("#a1").html("a) " + q2Answers[0]);
        $("#a2").html("b) " + q2Answers[1]);
        $("#a3").html("c) " + q2Answers[2]);
        $("#a4").html("d) " + q2Answers[3]);
    }

    //If we're on Question 3:
    if (num == 2) {
        console.log("     |setting text for Question 3...");
        $("#a1").html("a) " + q3Answers[0]);
        $("#a2").html("b) " + q3Answers[1]);
        $("#a3").html("c) " + q3Answers[2]);
        $("#a4").html("d) " + q3Answers[3]);
    }

    //If we're on Question 4:
    if (num == 3) {
        console.log("     |setting text for Question 4...");
        $("#a1").html("a) " + q4Answers[0]);
        $("#a2").html("b) " + q4Answers[1]);
        $("#a3").html("c) " + q4Answers[2]);
        $("#a4").html("d) " + q4Answers[3]);
    }

    //If we're on Question 5:
    if (num == 4) {
        console.log("     |setting text for Question 5...");
        $("#a1").html("a) " + q5Answers[0]);
        $("#a2").html("b) " + q5Answers[1]);
        $("#a3").html("c) " + q5Answers[2]);
        $("#a4").html("d) " + q5Answers[3]);
    }

    console.log("    |leaving setQuestions()...");
}


function startTimer(t) {
    //Function to start the timer
    console.log("  |startTimer() is running...");
    console.log("  |startTimer() will run for: " + t + " seconds.");

    timeCount = t;
    let countdownInterval = setInterval(() => {

        if (timeCount < 0) {
            clearInterval(countdownInterval);
        } else {
            $("#timerLabel").html("Time Left: " + timeCount);
            timeCount--;
        }
    }, 1000);
    console.log("  |leaving startTimer()...")
}
