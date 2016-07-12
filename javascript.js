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
      $('#container2').append('<div class="' + twoBoxList[i] + ' boxTwo"></div>');
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

  var players = function() {

    //player 1 --------

    // if box is red and if a is clicked run this function
    var keypressA = function(a) {
      if ($(".box").first().attr('class') === 'red box' && a.which == 65) {
        console.log('clicked');
        $(".box").first().css("position", "absolute").css("left", "300px").removeClass("box").animate({
          marginLeft: "+=100",
          opacity: 0
        }, 200, function() {
          $(this).remove();
        });
        checkWinner();
      }
    };

    $(document).on('keydown', keypressA);

    // if box is blue and if s is clicked run this function
    var keypressS = function(s) {
      if ($(".box").first().attr('class') === 'blue box' && s.which == 83) {
        console.log('clicked');
        $(".box").first().css("position", "absolute").css("left", "300px").removeClass("box").animate({
          marginLeft: "+=100",
          opacity: 0
        }, 200, function() {
          $(this).remove();
        });

        checkWinner();
      }
    };

    $(document).on('keydown', keypressS);

    // if box is green and if d is clicked run this function
    var keypressD = function(d) {
      if ($(".box").first().attr('class') === 'green box' && d.which == 68) {
        console.log('clicked');
        $(".box").first().css("position", "absolute").css("left", "300px").removeClass("box").animate({
          marginLeft: "+=100",
          opacity: 0
        }, 200, function() {
          $(this).remove();
        });

        checkWinner();
      }
    };

    $(document).on('keydown', keypressD);

    //player 1 --------

    //player 2 --------

    // if box is red and if j is clicked run this function
    var keypressJ = function(j) {
      if ($(".boxTwo").first().attr('class') === 'red boxTwo' && j.which == 74) {
        console.log('clicked');
        $(".boxTwo").first().css("position", "absolute").css("left", "300px").removeClass("boxTwo").animate({
          marginLeft: "+=100",
          opacity: 0
        }, 200, function() {
          $(this).remove();
        });

        checkWinner();
      }
    };

    $(document).on('keydown', keypressJ);

    // if box is blue and if k is clicked run this function
    var keypressK = function(k) {
      if ($(".boxTwo").first().attr('class') === 'blue boxTwo' && k.which == 75) {
        console.log('clicked');
        $(".boxTwo").first().css("position", "absolute").css("left", "300px").removeClass("boxTwo").animate({
          marginLeft: "+=100",
          opacity: 0
        }, 200, function() {
          $(this).remove();
        });

        checkWinner();
      }
    };

    $(document).on('keydown', keypressK);


    // if box is green and if l is clicked run this function
    var keypressL = function(l) {
      if ($(".boxTwo").first().attr('class') === 'green boxTwo' && l.which == 76) {
        console.log('clicked');
        $(".boxTwo").first().css("position", "absolute").css("left", "300px").removeClass("boxTwo").animate({
          marginLeft: "+=100",
          opacity: 0
        }, 200, function() {
          $(this).remove();
        });

        checkWinner();
      }
    };

    $(document).on('keydown', keypressL);


  //player 2 --------

};

//end player function

//experimental psychadelic borders-----

var colors = ['red', 'green', 'blue', 'black', 'yellow', 'pink'];
var currentColor = 0;

var changeColor = function() {
  setInterval(function() {
    var colorRandomiser = "#" + ((1 << 24) * Math.random() | 0).toString(16); // from http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
    $('.button').css("border-color", colorRandomiser);
  }, 100);
};

changeColor();

//experimental psychadelic borders-----


//check winning conditions ----

var checkWinner = function() {
  if ($('.box').length === 0)  {
    console.log("Player 1 Wins!");
    $(document).off('keydown');
    clearInterval(interval);
    $('p').html('Player 1 Wins ');
    $('p').hover(function() {
      $('p').html('start game!');
    }, function() {
      $('p').html('Player 1 Wins');
    });
  } else if ($('.boxTwo').length === 0) {
    console.log("Player 2 Wins!");
    $(document).off('keydown');
    clearInterval(interval);
    $('p').html('Player 2 Wins ');
    $('p').hover(function() {
      $('p').html('start game!');
    }, function() {
      $('p').html('Player 2 Wins');
    });
  }
};

//check winning conditions ----

//rollover ----

var initGame = function() {
  $('#container').html('');
  $('#container2').html('');
  timer = 0;
  makeDivs();
  stopWatch();
  players();
};


$('p').hover(function() {
  $('p').html('start game!');
}, function() {
  $('p').html('asd vs jkl');
});
$('p').click(initGame);







//rollover ----


});
