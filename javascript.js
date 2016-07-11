$(document).ready(function() {

  var numOfBoxes = 20; // defining how many boxes you want to play

  var listOfColor = ['red', 'green', 'blue']; //list of colors must be similar to class name

  var boxList = [];


  var randomiseColor = function(min, max) { // randomiser function
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  var makeDivs = function() { // randomises each div created and fills up boxList up to the numOfBoxes defined
    for (var i = 0; i < numOfBoxes; i++) {
      boxList[i] = listOfColor[randomiseColor(0, 2)];
      $('#container').append('<div class="' + boxList[i] + ' box"></div>');
    }
  };

  makeDivs();


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
    }
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
    }
  });

  // if box is green and if s is clicked run this function
  $(document).keydown(function(d) {
    if ($(".box").first().attr('class') === 'green box' && d.keyCode == 68) {
      console.log('clicked');
      $(".box").first().css("position", "absolute").css("left", "300px").removeClass("box").animate({
        marginLeft: "+=100",
        opacity: 0
      }, 200, function() {
        $(this).remove();
      });
    }
  });



});
