var timer = 0;

var leadb = $('#leaderB');
var timerEl = $('#timer');
var quizCard = $('#quizCard');
var quizQ = $('#title');
var quizA = $('#options');
var ctext = $('#ctext');
var YoN = $('#validate');

function dispStart() {
    // This will set the styling of the quiz.
    quizCard.attr('class', 'qCard')
    // This will set the text of the initial start of the quiz
    quizQ.attr('class', 'title');
    quizQ.text('League of Legends Quiz');
    ctext.attr('class', 'content');
    ctext.text('Test your knowledge on all things League. The timer will count down as you take this quiz. Any wrong answers will subtract 8 seconds. Once you reach the end of the quiz or the timer reaches 0, you will be presented with your score and you can save your scores with your initials. Your score is how much time was left. Good luck!');


}

dispStart()

