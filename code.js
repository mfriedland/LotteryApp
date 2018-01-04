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


// function generateWinningNumber() {
  // function lottoNumbers() {
  Game.prototype.lottoNumbers = function () {
    // var numbersList = [];
      for (var i=0;i<6; i++){
        var temp = Math.floor(Math.random()*10)+1;
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
  // console.log(this.winningNumbers)
  for (var i=0; i<6;i++){
    console.log(this.pastGuesses)
    for (var j=0; j<this.winningNumbers.length; j++){
      if (this.pastGuesses[i] === this.winningNumbers[j]) count++
    }
  }
  console.log(count)
  if (count > 3){
  $('#subtitle').text("YOU GOT " +count+ " NUMBERS CORRECT!")
  } else {
  $('#subtitle').text("Yout got " +count+ " numbers correct. Better luck next time.")
  }

}

function makeAGuess(game) {
  $('.center').each(function(index, value){
    // var guess = $('#player-input').val();
    var guess = $(this).val();
    $('#player-input').val("")  ;
    var output = game.playersGuessSubmission(parseInt(guess,10));
  })
    // is there any way of storing the value and
    // applying it to every li's with using each function?
    // $('#guess-list li:nth-child('+ this.pastGuesses.length +')').text(this.playersGuess)
//     $('li').each(function(index, value) {
//   $(this).text(guess);
// })
}



// THE GAME!!
$(document).ready(function() {
    var game = new Game()
  


  $('#reset').click(function() {
    var game = newGame();
    $('body')
    $('#title').text('Play Again!').hide().show()
    $('.num').hide()
    $('.nums').hide()
    $('.num').show().text('');
    $('.nums').show().text('');
  })

    $('#submit').click(function() {
       makeAGuess(game);
    })

    $('#player-input').keypress(function(event) {
        if ( event.which == 13 ) {
           makeAGuess(game);
        }
    })

    $('#lottoRoll').click(function() {
       game.lottoNumbers(game);
       game.numberCorrect();
    })

})

$('#reset').click(function() {
    game = newGame();
    $('#title').text('Play Again!');
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