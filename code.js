var Game = function() {
    this.playersGuess = null;
    this.pastGuesses = [];
    // this.winningNumber = generateWinningNumber();
    // this.winningNumber = this.lottoNumbers();
    this.winningNumbers = []
}


function newGame() {
    return new Game(); //check that old game !== new game
}

Game.prototype.playersGuessSubmission = function(guess) {
    if(typeof guess !== 'number' || guess < 1 || guess > 100) {
        throw "That is an invalid guess.";
    }
    this.playersGuess = guess;
    return this.checkGuess();
}



Game.prototype.checkGuess = function() {
      // $('#title').text("You got " +count+ " correct!");
      this.pastGuesses.push(this.playersGuess);
      $('#guess-list div:nth-child('+ this.pastGuesses.length +')').text(this.playersGuess).show(400);
}

Game.prototype.luckyGuesses = function(){
  // for (var i=0; i<this.luckyNumbers.length; i++){
  //     this.pastGuesses.push(this.luckyNumbers[i]);
    for (var i=0; i<luckyNumbers.length; i++){
      this.pastGuesses.push(luckyNumbers[i]);
      // $('#input-parent input:nth-child('+ this.pastGuesses.length +')').text(this.playersGuess).show(400);
    }
}

// function generateWinningNumber() {
  // function lottoNumbers() {
  Game.prototype.lottoNumbers = function () {
    // var numbersList = [];
      for (var i=0;i<6; i++){
        var temp = Math.floor(Math.random()*30)+1;
        if (this.winningNumbers.indexOf(temp) === -1) {
          this.winningNumbers.push(temp)
          document.getElementById("circle"+i).innerHTML = this.winningNumbers[i];
        } else{
          i--;
      }
    }
  }
  // Game.prototype.lottoNumbers = function () {
  //   var numbersList = [];
  //     for (var i=0;i<6; i++){
  //       var temp = Math.floor(Math.random()*40)+1;
  //       if (numbersList.indexOf(temp) === -1) {
  //         numbersList.push(temp)
  //         document.getElementById("circle"+i).innerHTML = numbersList[i];
  //       } else{
  //         i--;
  //     }
  //   }
  // }
    // return lottoNumbers();
// }

Game.prototype.numberCorrect = function() {
  var count = 0 
      // this.luckyNumbers = [] || this.luckyNumbers.slice(0) 
  // console.log(this.winningNumbers)
  for (var i=0; i<6;i++){
    for (var j=0; j<this.winningNumbers.length; j++){
      if (this.pastGuesses[i] === this.winningNumbers[j]){
        count++
        // this.pastGuesses[i]
      }
    }
  }
  if (count > 3){
  $('#subtitle').text("CONGRATULATIONS, YOU WON. YOU GOT " +count+ " NUMBERS CORRECT!")
  } else {
  $('#subtitle').text("You got " +count+ " numbers correct. Better luck next time.")
  }
  // this.pastGuesses = []
  this.winningNumbers = []
  count = 0
}

function makeAGuess(game) {
  $('.center').each(function(index, value){
    var guess = $(this).val();
    var output = game.playersGuessSubmission(parseInt(guess,10));
    // $('.center').val("")  ;
  })
}



// THE GAME!!
$(document).ready(function() {
    var game = new Game();
    // var count = 0;
    var luckyNumbers;

  $('#reset').click(function() {
    game = newGame();
    $('body')
    $('#title').text('Play Again!').hide().show()
    $('.num').hide()
    $('.nums').hide()
    $('.num').show().text('');
    $('.nums').show().text('');
    $('.center').val("")  ;
  })

    $('#submit').click(function() {
       game.luckyGuesses(game);
       makeAGuess(game);
    })

    $('#playLuckyNumbers').click(function() {
      // $('.center').each(function(index, value){
      for (var i=0; i<luckyNumbers.length; i++){
        game.pastGuesses.push(luckyNumbers[i]);
        $('#guess-list div:nth-child('+ game.pastGuesses.length +')').text(luckyNumbers[i]).show(400);
        $('#input-parent input:nth-child('+ game.pastGuesses.length +')').val(luckyNumbers[i]).show(400);
      }
      makeAGuess(game);
    })

    $('#player-input').keypress(function(event) {
        if ( event.which == 13 ) {
           makeAGuess(game);
        }
    })

    $('#lottoRoll').click(function() {
       // count = 0;
        $('.num').hide().show().text('');
      game.lottoNumbers(game);
      game.numberCorrect();
    })

    $('#reset').click(function() {
    game = newGame();
    $('#title').text('Play Again!');
    })

    $('#luckyNumbers').click(function() {
    // game.luckyNumbers = game.pastGuesses.slice(0)
    luckyNumbers = game.pastGuesses.slice(0)
    })

})




    // $('#title').text(output)

// function guessNumbers() {
//   var guess = prompt("Please pick 6 numbers between 1 and " + numOfBalls) // store users guess
//   var guesses = guess.split(" ")
//   for (var i=6;i<12; i++){
//     // if (numbersList.indexOf(temp) === -1) {
//       // numbersList.push(temp)
//       document.getElementById("circle"+i).innerHTML = guesses[i-6];
//   }
// }








// var prob; //number of users 
// var entrants;
// // prob = 
// var button, guess;

// var num; // number of balls
// num = 50

// var started = false; 

// function setup(){
//   noCanvas();
//   entrants = select('#entrants')
//   entrants.changed(updateProbability)
//   button = select('#start')
//   button.click(startLottery)
// }

// function updateProbability(){
//   // prob = / 
// }

// function startLottery(){
//   started = true;
// }

// function draw() {
//   if(started){
//     var randomize = Math.floor(Math.random()*num)
    
//     var results = select('#results')''
//   }
//   