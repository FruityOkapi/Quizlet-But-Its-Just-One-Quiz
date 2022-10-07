// Sets timer to 0 as default
var timer = 0;
// These set query selectors for the various elements in the HTML
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

// This is to make an array for the 10 questions to be grabbed later
var qs = [
    'When did Riot rework how items work?',
    'Version 9.3 of the item Infinity Edge converted 10% of crits into true damage. When this was changed, along with multiple other marksman items, what class of champions temporarily replaced marksmen in the ADC role?',
    'How many full reworks has the champion Ryze received over the years?',
    'In patch 8.21, Irelia was nerfed in what way that caused the community to be upset with Riot?',
    'What champion lost their main identifier in a rework that the community did not want as launch approached?',
    'Which champion had the most controversial release?',
    "Out of these options, what was Riot's first IP to have mainstream attention?",
    "Which band produced multiple songs for the creative developers of the 2014 Worlds music video and 2021's Arcane.",
    'What year did Riot add elemental dragons?',
    "What is Rift Herald's name?"
]

// These arrays are the options to the questions above in order by the questions array position
var a0 = ['A. Preseason 2021', 'B. Mid-2020 before MSI', 'C. May 2020 ', 'D. Preseason 2019']

var a1 = ['A. Mages', 'B. Tanks', 'C. Bruisers', 'D. Assassins', 'E. All of the above', 'F. Just A and C', 'G. Just B and C']

var a2 = ['A. 3', 'B. 4', 'C. 5', 'D. 6']

var a3 = ['A. -5 move speed', 'B. -5 Attack Damage', 'C. -5 Armor', 'D.-5% Attack Speed'
]

var a4 = ['A. Yorick', 'B. Poppy', 'C. Udyr', "D. A'atrox"]

var a5 = ['A. Yuumi', 'B. Seraphine', 'C. Renata Glasc', 'D. Yone']

var a6 = ['A. Star Guardians', 'B. Pentakill', 'C. Arcane', 'D. K/DA']

var a7 = ['A. Zedd', 'B. Against the Current', 'C. Imagine Dragons', 'D. Nicki Taylor']

var a8 = ['A. 2018', 'B. 2015', 'C. 2016', 'D. 2017']

var a9 = ['A. Silvy', 'B. Shelly', 'C. Shuckle','D. Shirley', "E. Trick question it's B and D cause there are 2 heralds"]

var done = false;

function dispStart() {
    // This will set the styling of the quiz.
    quizCard.attr('class', 'qCard')
    // This will set the text of the initial start of the quiz
    quizQ.attr('class', 'title');
    quizQ.text('League of Legends Quiz');
    ctext.attr('class', 'content');
    ctext.text('Test your knowledge on all things League. The timer will count down as you take this quiz. Any wrong answers will subtract 8 seconds. Once you reach the end of the quiz or the timer reaches 0, you will be presented with your score and you can save your scores with your initials. Your score is how much time was left. Good luck!');
    // This sets the text of the top header for leaderboards button and timer
    timerEl.text('Time left: '+ timer);
    leadb.text('Leaderboards');
    // ADD AN EVENT LISTENER WHEN YOU MAKE THE LEADERBOARDS!!!!!!!!!!!!!!!!!!!!!!!!!
    
    // This is to make the start quiz button
    var startButton = $('<button>');
    startButton.text('Start Quiz');
    startButton.attr('class', 'options');
    startQ.append(startButton);
    startQ.click(function() {
        startQuiz()
        startTimer()
    });
}

function startTimer() {
    timer = 100;
    timerEl.text('Time left: '+ timer);
    var timeInterval = setInterval(function () {
        if (timer > 1 && done === false) {
            timer--;
            timerEl.text('Time left: '+ timer);
        } else if (timer === 1 && done === false){
            timer--;
            timerEl.text('Time left: '+ timer);
        } else {
            timerEl.text('Time left: '+ timer);
            clearInterval(timeInterval);
            leaderboards();
        }
    }, 1000);
    
}

function validateYes() {
    var shortTime = 1;    
    YoN.addClass('vali');
    YoN.text('Correct!');
    var timeInterval = setInterval(function () {
        if (shortTime > 0) {
            YoN.text('Correct!');
            shortTime--;
        } else {
            YoN.text('');
            YoN.removeClass('vali');
            clearInterval(timeInterval);
        }
    }, 1000);
}

function validateNo() {
    var shortTime = 1;
    YoN.addClass('vali');
    YoN.text('Nope!');
    var timeInterval = setInterval(function () {
        if (shortTime > 0) {
            YoN.text('Nope!');
            shortTime--;
        } else {
            YoN.removeClass('vali');
            YoN.text('');
            clearInterval(timeInterval);
        }
    }, 1000);
}

function startQuiz() {
    startQ.text('');
    ctext.text('');
    quizQ.text(qs[0])
    for (var i = 0; i < a0.length; i++) {
        var selections = $('<button>');
        selections.text(a0[i]);
        selections.addClass('optionsQ');
        if (i === 0) {
            selections.click(function () {
                var opt = $('.optionsQ')
                opt.remove();
                validateYes();
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
                temp();
            })
        }
        quizA.append(selections);
    }

}

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
                temp();
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
                temp();
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
                temp();
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
                temp();
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
                temp();
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
                temp();
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
                temp();
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
                temp();
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
                var opt = $('.optionsQ')
                opt.remove();
                title.remove();
                done = true;
                leaderboards();
            })
        } else {
            selections.click(function () {
                temp();
            })
        }
        quizA.append(selections);
    }

}

if (timer === 0) {
    leaderboards()
}

function leaderboards() {
    var opt = $('.optionsQ')
    opt.remove();
    quizQ.text('Quiz Over!');

}

function gameOver() {
    console.log('You Lived')
}

function temp () {
    console.log('U died :c')
}

// This is to make sure the page displays the startup page
dispStart()