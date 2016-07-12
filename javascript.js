$(document).ready(function() {


  var numOfBoxes = 20; // defining how many boxes you want to play
  var listOfColor = ['red', 'green', 'blue']; //list of colors must be similar to class name


  var oneBoxList = [];
  var twoBoxList = [];
  var interval;


  //game initialisation----

  var randomiseColor = function(min, max) { // randomiser function
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  var makeDivs = function() { // randomises each div created and fills up boxList up to the numOfBoxes defined
    for (var i = 0; i < numOfBoxes; i++) {
      oneBoxList[i] = listOfColor[randomiseColor(0, 2)];
      $('#container').append('<div class="' + oneBoxList[i] + ' box"></div>');
      twoBoxList[i] = listOfColor[randomiseColor(0, 2)];
      $('#container2').append('<div class="' + twoBoxList[i] + ' boxtwo"></div>');
    }
  };

  //game initialisation----

  //stopwatch -----

  var timer = 0;

  var stopWatch = function() {
    $('p').html(timer.toFixed(2));
    interval = setInterval(function() {
      timer += 0.01;
      $('p').html(timer.toFixed(2));
    }, 10);
  };
  //stopwatch-----


//creating function for players

var players = function(){

  //player 1 --------

  // if box is red and if a is clicked run this function
  $(document).keydown(function(a) {
    if ($(".box").first().attr('class') === 'red box' && a.keyCode == 65) {
      console.log('clicked');
      $(".box").first().css("position", "absolute").css("left", "300px").removeClass("box").animate({
        marginLeft: "+=100",
        opacity: 0
      }, 200, function() {
        $(this).remove();
      });
    } checkWinner();
  });

  // if box is blue and if s is clicked run this function
  $(document).keydown(function(s) {
    if ($(".box").first().attr('class') === 'blue box' && s.keyCode == 83) {
      console.log('clicked');
      $(".box").first().css("position", "absolute").css("left", "300px").removeClass("box").animate({
        marginLeft: "+=100",
        opacity: 0
      }, 200, function() {
        $(this).remove();
      });
    } checkWinner();
  });

  // if box is green and if d is clicked run this function
  $(document).keydown(function(d) {
    if ($(".box").first().attr('class') === 'green box' && d.keyCode == 68) {
      console.log('clicked');
      $(".box").first().css("position", "absolute").css("left", "300px").removeClass("box").animate({
        marginLeft: "+=100",
        opacity: 0
      }, 200, function() {
        $(this).remove();
      });
    }checkWinner();


  });

  //player 1 --------

  //player 2 --------

  // if box is red and if j is clicked run this function
  $(document).keydown(function(j) {
    if ($(".boxtwo").first().attr('class') === 'red boxtwo' && j.keyCode == 74) {
      console.log('clicked');
      $(".boxtwo").first().css("position", "absolute").css("left", "300px").removeClass("boxtwo").animate({
        marginLeft: "+=100",
        opacity: 0
      }, 200, function() {
        $(this).remove();
      });
    } checkWinner();
  });

  // if box is blue and if k is clicked run this function
  $(document).keydown(function(k) {
    if ($(".boxtwo").first().attr('class') === 'blue boxtwo' && k.keyCode == 75) {
      console.log('clicked');
      $(".boxtwo").first().css("position", "absolute").css("left", "300px").removeClass("boxtwo").animate({
        marginLeft: "+=100",
        opacity: 0
      }, 200, function() {
        $(this).remove();
      });
    } checkWinner();
  });

  // if box is green and if d is clicked run this function
  $(document).keydown(function(l) {
    if ($(".boxtwo").first().attr('class') === 'green boxtwo' && l.keyCode == 76) {
      console.log('clicked');
      $(".boxtwo").first().css("position", "absolute").css("left", "300px").removeClass("boxtwo").animate({
        marginLeft: "+=100",
        opacity: 0
      }, 200, function() {
        $(this).remove();
      });
    } checkWinner();


  });

  //player 2 --------

};

  //end player function

  //experimental psychadelic borders-----

  var colors  = [ 'red', 'green', 'blue', 'black', 'yellow', 'pink' ];
  var currentColor = 0;

  var changeColor = function() {
    setInterval(function(){
      var colorRandomiser = "#"+((1<<24)*Math.random()|0).toString(16); // from http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
      $('.button').css("border-color", colorRandomiser);
    }, 100);
  };

changeColor();

  //experimental psychadelic borders-----

// $(document).unbind('keydown'); // locking keys when start

  //check winning conditions ----

  var checkWinner = function(){
    if ($('.box').length === 0 && $('.box').length ==! $('.boxtwo').length) {
      console.log("Player 1 Wins!");
      $(document).unbind('keydown');
      clearInterval(interval);
      $('p').html('Player 1 Wins');
    } else if ($('.boxtwo').length === 0 && $('.box').length ==! $('.boxtwo').length) {
      console.log("Player 2 Wins!");
      $(document).unbind('keydown');
      clearInterval(interval);
      $('p').html('Player 2 Wins');
    }
  };

  //check winning conditions ----

  //rollover ----
  $('p').hover(function(){
    $('p').html('start game!');
  }, function(){
    $('p').html('asd vs jkl');
  });
  $('p').click(makeDivs)`;
  $('p').click(stopWatch);
  setInterval(function(){

  });
  players();

  //rollover ----


});
