// Sets timer to 0 as default
var timer = 0;
// These set query selectors for the various elements in the DOM
var leadb = $('#leaderB');
var timerEl = $('#timer');
var quizCard = $('#quizCard');
var quizQ = $('#title');
var quizA = $('#options');
var options = $('#optionsH');
var ctext = $('#ctext');
var YoN = $('#validate');
var startQ = $('#startQ');
var clear = $('#clear');
var addForm = $('#form');
var submit = $('#submit');
var retry = $('#retry');

// This array is for the scores
var scores = [];

// This is to make an array for the 10 questions to be grabbed later
var qs = ['When did Riot rework how items work?', 'Version 9.3 of the item Infinity Edge converted 10% of crits into true damage. When this was changed, along with multiple other marksman items, what class of champions temporarily replaced marksmen in the ADC role?', 'How many full reworks has the champion Ryze received over the years?', 'In patch 8.21, Irelia was nerfed in what way that caused the community to be upset with Riot?', 'What champion lost their main identifier in a rework that the community did not want as launch approached?', 'Which champion had the most controversial release?', "Out of these options, what was Riot's first IP to have mainstream attention?", "Which band produced multiple songs for the creative developers of the 2014 Worlds music video and 2021's Arcane.", 'What year did Riot add elemental dragons?', "What is Rift Herald's name?"];

// These arrays are the options to the questions above in order by the questions array position
var a0 = ['A. Preseason 2021', 'B. Mid-2020 before MSI', 'C. May 2020 ', 'D. Preseason 2019'];

var a1 = ['A. Mages', 'B. Tanks', 'C. Bruisers', 'D. Assassins', 'E. All of the above', 'F. Just A and C', 'G. Just B and C'];

var a2 = ['A. 3', 'B. 4', 'C. 5', 'D. 6'];

var a3 = ['A. -5 move speed', 'B. -5 Attack Damage', 'C. -5 Armor', 'D.-5% Attack Speed'
];

var a4 = ['A. Yorick', 'B. Poppy', 'C. Udyr', "D. A'atrox"];

var a5 = ['A. Yuumi', 'B. Seraphine', 'C. Renata Glasc', 'D. Yone'];

var a6 = ['A. Star Guardians', 'B. Pentakill', 'C. Arcane', 'D. K/DA'];

var a7 = ['A. Zedd', 'B. Against the Current', 'C. Imagine Dragons', 'D. Nicki Taylor'];

var a8 = ['A. 2018', 'B. 2015', 'C. 2016', 'D. 2017'];

var a9 = ['A. Silvy', 'B. Shelly', 'C. Shuckle','D. Shirley', "E. Trick question it's B and D cause there are 2 heralds"];

// This var helps us stop the timer when the test is done/stopped with the leaderboard
var done = false;
var stop = false;

// This function sets the start page when ran.
function dispStart() {
    retry.text('');
    clear.text('');
    // This will set the styling of the quiz.
    quizCard.attr('class', 'qCard');
    // This will set the text of the initial start of the quiz
    quizQ.attr('class', 'title');
    quizQ.text('League of Legends Quiz');
    ctext.attr('class', 'content');
    ctext.text('Test your knowledge on all things League. The timer will count down as you take this quiz. Any wrong answers will subtract 8 seconds. Once you reach the end of the quiz or the timer reaches 0, you will be presented with your score and you can save your scores with your initials. Your score is how much time was left. Good luck!');
    // This sets the text of the top header for leaderboards button and timer
    timerEl.text('Time left: '+ timer);
    leadb.text('Leaderboards');
    leadb.click(function(){
        leaderboards();
    });
    // This is to make the start quiz button
    var startButton = $('<button>');
    startButton.text('Start Quiz');
    startButton.attr('class', 'options');
    startQ.append(startButton);
    startQ.click(function() {
        startQuiz();
        startTimer();
    });
}

// This starts the timer when ran
function startTimer() {
    // This sets timer to 100 seconds
    timer = 100;
    // This sets the text to an updatable message
    timerEl.text('Time left: '+ timer);
    var timeInterval = setInterval(function () {
        // This makes it so time continues unless timer runs out or leaderboards is clicked.
        if (timer > 1 && done === false && stop === false) {
            timer--;
            timerEl.text('Time left: '+ timer);
        } else if (timer === 1 && done === false  && stop === false) {
            timer--;
            timerEl.text('Time left: '+ timer);
        } else if (timer <= 0 || done === true) {
            timerEl.text('Time left: '+ timer);
            clearInterval(timeInterval);
            quizOver();
            return;
        } else if (stop === true) {
            console.log('working');
            clearInterval(timeInterval);
            return;
        }
        // The number below shows the miliseconds between each execution
    }, 1000);
    
}

// These show the confirmation of correct or "nope" without errors and it looks nice.
// It has an animation method .show() which will reveal the text and fade out in 1500ms.
function validateYes() {  
    YoN.addClass('vali');
    YoN.text("Correct!").show().fadeOut(1500);
}

function validateNo() {
    YoN.addClass('vali');
    YoN.text("Nope!").show().fadeOut(1500);
}

// This is question 1 and the start of the quiz when ran.
function startQuiz() {
    // These next lines of code remove any stray buttons just in case
    var opt = $('.optionsQ')
    opt.remove();
    // These reset the page. I just realized typing out the comments I could have made a reset function but I don't have time to implement that and make my code a little shorter.
    startQ.text('');
    ctext.text('');
    // This sets the quiz question using the question array
    quizQ.text(qs[0])
    // This for loop renders buttons for each of the options and sets the correct answer to progress the player witht the "Correct!" animation while incorrect answers detract time and display "Nope!" animation under the answers.
    for (var i = 0; i < a0.length; i++) {
        var selections = $('<button>');
        selections.text(a0[i]);
        selections.addClass('optionsQ');
        if (i === 0) {
            selections.click(function () {
                // This will remove the buttons from this question to make room for new options for the next question
                var opt = $('.optionsQ')
                opt.remove();
                // This renders the corresponding question.
                validateYes();
                // This renders the next question.
                question2();
            })
        } else {
            selections.click(function () {
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                validateNo();
                timerEl.text('Time left: '+ timer);
            })
        }
        // This renders the question.
        quizA.append(selections);
    }

}

// This will be similar to startQuiz() in terms of comments so just refer to that for up to question10().
function question2() {
    quizQ.text(qs[1])
    for (var i = 0; i < a1.length; i++) {
        var selections = $('<button>');
        selections.text(a1[i]);
        selections.addClass('optionsQ');
        if (i === 5) {
            selections.click(function () {
                var opt = $('.optionsQ')
                opt.remove();
                validateYes();
                question3();
            })
        } else {
            selections.click(function () {
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                validateNo();
                timerEl.text('Time left: '+ timer);

            })
        }
        quizA.append(selections);
    }

}

function question3() {
    quizQ.text(qs[2])
    for (var i = 0; i < a2.length; i++) {
        var selections = $('<button>');
        selections.text(a2[i]);
        selections.addClass('optionsQ');
        if (i === 2) {
            selections.click(function () {
                var opt = $('.optionsQ')
                opt.remove();
                validateYes();
                question4();
            })
        } else {
            selections.click(function () {
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                validateNo();
                timerEl.text('Time left: '+ timer);

            })
        }
        quizA.append(selections);
    }

}

function question4() {
    quizQ.text(qs[3])
    for (var i = 0; i < a3.length; i++) {
        var selections = $('<button>');
        selections.text(a3[i]);
        selections.addClass('optionsQ');
        if (i === 0) {
            selections.click(function () {
                var opt = $('.optionsQ')
                opt.remove();
                validateYes();
                question5();
            })
        } else {
            selections.click(function () {
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                validateNo();
                timerEl.text('Time left: '+ timer);
            })
        }
        quizA.append(selections);
    }

}

function question5() {
    quizQ.text(qs[4])
    for (var i = 0; i < a4.length; i++) {
        var selections = $('<button>');
        selections.text(a4[i]);
        selections.addClass('optionsQ');
        if (i === 3) {
            selections.click(function () {
                var opt = $('.optionsQ')
                opt.remove();
                validateYes();
                question6();
            })
        } else {
            selections.click(function () {
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                validateNo();
                timerEl.text('Time left: '+ timer);
            })
        }
        quizA.append(selections);
    }

}

function question6() {
    quizQ.text(qs[5])
    for (var i = 0; i < a5.length; i++) {
        var selections = $('<button>');
        selections.text(a5[i]);
        selections.addClass('optionsQ');
        if (i === 1) {
            selections.click(function () {
                var opt = $('.optionsQ')
                opt.remove();
                validateYes();
                question7();
            })
        } else {
            selections.click(function () {
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                validateNo();
                timerEl.text('Time left: '+ timer);
            })
        }
        quizA.append(selections);
    }

}

function question7() {
    quizQ.text(qs[6])
    for (var i = 0; i < a6.length; i++) {
        var selections = $('<button>');
        selections.text(a6[i]);
        selections.addClass('optionsQ');
        if (i === 3) {
            selections.click(function () {
                var opt = $('.optionsQ')
                opt.remove();
                validateYes();
                question8();
            })
        } else {
            selections.click(function () {
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                validateNo();
                timerEl.text('Time left: '+ timer);
            })
        }
        quizA.append(selections);
    }

}

function question8() {
    quizQ.text(qs[7])
    for (var i = 0; i < a7.length; i++) {
        var selections = $('<button>');
        selections.text(a7[i]);
        selections.addClass('optionsQ');
        if (i === 2) {
            selections.click(function () {
                var opt = $('.optionsQ')
                opt.remove();
                validateYes();
                question9();
            })
        } else {
            selections.click(function () {
                
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                validateNo();
                timerEl.text('Time left: '+ timer);
            })
        }
        quizA.append(selections);
    }

}

function question9() {
    quizQ.text(qs[8])
    for (var i = 0; i < a8.length; i++) {
        var selections = $('<button>');
        selections.text(a8[i]);
        selections.addClass('optionsQ');
        if (i === 2) {
            selections.click(function () {
                var opt = $('.optionsQ')
                opt.remove();
                validateYes();
                question10();
            })
        } else {
            selections.click(function () {
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                validateNo();
                timerEl.text('Time left: '+ timer);
            })
        }
        quizA.append(selections);
    }

}

function question10() {
    quizQ.text(qs[9])
    for (var i = 0; i < a9.length; i++) {
        var selections = $('<button>');
        selections.text(a9[i]);
        selections.addClass('optionsQ');
        if (i === 4) {
            selections.click(function () {
                // Instead of removing everything from the quiz, just have the timer function do all the work to render the Quiz Over page.
                done = true;
            })
        } else {
            selections.click(function () {
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                timer--;
                validateNo();
                timerEl.text('Time left: '+ timer);
            })
        }
        quizA.append(selections);
    }

}

// This renders the Quiz Over page while removing previous elements.
function quizOver() {
    var opt = $('.optionsQ')
    opt.remove();
    quizQ.text('Quiz Over!');
    // This sets the message to display their score and reuqest them to type it below.
    ctext.text('Your score is: ' + timer + '. Type your initials below to submit your score!');
    // This renders a new user entry form for them to type their initials.
    var tInput = $('<input>');
    // This sets the type to text
    tInput.attr('type', 'text');
    // This adds a class
    tInput.addClass('submit');
    // The next three lines do something similar as above just the type is submit as well as the class. The class submit is there for selecting for later as well as CSS
    var submitButton = $('<input>');
    submitButton.addClass('submit');
    submitButton.attr('type', 'submit');
        // This sets the event to not do anything when nothing is entered or if something is entered, make it part of the scores array and stores it in the localStorage as a JSON stringified array.
        addForm.submit(function(event) {
            if (tInput.val() !== "") {
                // This sets the var currentScore to a string of whatever they typed + their score with a tildee in the middle. why is this not working on live site.
                var currentScore = tInput.val() + ' ~ ' + timer;
                // This appends the string to the array
                scores.push(currentScore);
                // This stores it
                localStorage.setItem('scores', JSON.stringify(scores));
            // This retrieves the new list
            getScore();
            // This loads the leaderboards
            leaderboards();
        } else {
            // If nothing is entered when submit is clicked or enter is pressed it will do nothing
            event.preventDefault();
        }
    })
    addForm.append(tInput);
    addForm.append(submitButton);

}



// This makes the scores array up to date by retrieving the localStorage array and parsing it and making scores the updated array.
function getScore() {
    var getScore = localStorage.getItem('scores');
    scores = JSON.parse(getScore);
}

// This clears the array on the localStorage
function clearScore() {
    scores = [];
    localStorage.setItem('scores', JSON.stringify(scores));
}

// This renders the leaderboards
function leaderboards() {
    stop = true;
    var opt = $('.optionsQ')
    opt.remove();
    var opt = $('.submit')
    opt.remove();
    // This removes the card on the quiz for style purposes.
    quizCard.attr('class', '');
    ctext.text('');
    timerEl.text('');
    leadb.text('');
    startQ.text('');
    quizQ.text('Leaderboards');
    // This for loop renders each of the scores as its own element.
    for (var i = 0; i < scores.length; i++) {
        var entry = $('<h3>');
        entry.text(scores[i]);
        entry.addClass('leaderb');
        quizA.append(entry);
    }
    // This makes a retry quiz button
    var retryButton = $('<button>');
    retryButton.text('Retry Quiz?');
    retryButton.attr('class', 'options');
    retry.append(retryButton);
    retry.click(function() {
        // This will reload the page as I can't seem to remove some bugs with the timer when just restarting the quiz loop.
        location.reload();
    })
    // This makes a clear leaderboards button
    var clearButton = $('<button>');
    clearButton.text('Clear Scores?');
    clearButton.attr('class', 'options');
    clear.append(clearButton);
    clear.click(function() {
        clearScore();
        var opt = $('.leaderb');
        opt.remove();
    })
}




// This is to make sure the page displays the startup page and retrieves the array from local storage.
dispStart();
getScore();