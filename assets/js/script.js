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

function startQuiz() {

}

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
    startButton.
    startButton.click(startQuiz());
}

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




// This is to make sure the page displays the startup page
dispStart()

