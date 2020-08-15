//Steps for game
// 1. Initialize variables 
//
// 2. function main()                               this function makes it so the the divs are clickable and they give the game function arguments of r,p,s
//    rock div add event listener(click function)
//        game(r)
//    paper div add even listener(click function)
//        game(p)
//    scissors div add event listener(click function)
//        game(s)
//
// 3. function getComputerChoice
//      choices array [r p s]
//      random number between 1 and 3 including
//      return choices[randomNumber] give us a random number!
//
// 4. function game(userChoice)
//      constant compChoice = getComputerChoice() ->function
//      switch statement (userChoice, compChoice)
//          if the case is r and s or pr or sp
//              win(userChoice, compChoice)
//          if the case is rp, ps, sr
//              lose(userChoice, compChoice)
//          if the case is ss, pp, rr
//              draw(userChoice, compChoice)
//
//  5. function win(userChoice computer Choice)
//        user score ++ add points to user
//        userScore_span.innerHTML = userScore; make the span element the user score!
//        compScore_span.innerHTML = compScore;
//
//  6. function lose(userChoice, computer Choice)
//        compScore++ add points to computer
//        userScore_span.innerHTML = userScore; make the span element the user score!
//        compScore_span.innterHTML = compScore;
// 
// 7. function draw(userChoice, computerChoice)
//        only changes results to say it's a draw
//
// 8. function convertToWord(letter)
//      if letter is r
//        return Rock
//      if letter is p
//          return Paper
//      if letter is s
//          return Scissors
//
//  END of notes

//Steps for game
// 1. Initialize variables 
//
// 2. function main()                               this function makes it so the the divs are clickable and they give the game function arguments of r,p,s
//    rock div add event listener(click function)
//        game(r)
//    paper div add even listener(click function)
//        game(p)
//    scissors div add event listener(click function)
//        game(s)
//
// 3. function getComputerChoice
//      choices array [r p s]
//      random number between 1 and 3 including
//      return choices[randomNumber] give us a random number!
//
// 4. function game(userChoice)
//      constant compChoice = getComputerChoice() ->function
//      switch statement (userChoice, compChoice)
//          if the case is r and s or pr or sp
//              win(userChoice, compChoice)
//          if the case is rp, ps, sr
//              lose(userChoice, compChoice)
//          if the case is ss, pp, rr
//              draw(userChoice, compChoice)
//
//  5. function win(userChoice computer Choice)
//        user score ++ add points to user
//        userScore_span.innerHTML = userScore; make the span element the user score!
//        compScore_span.innerHTML = compScore;
//
//  6. function lose(userChoice, computer Choice)
//        compScore++ add points to computer
//        userScore_span.innerHTML = userScore; make the span element the user score!
//        compScore_span.innterHTML = compScore;
// 
// 7. function draw(userChoice, computerChoice)
//        only changes results to say it's a draw
//
// 8. function convertToWord(letter)
//      if letter is r
//        return Rock
//      if letter is p
//          return Paper
//      if letter is s
//          return Scissors
//
//  END of notes

let userScore = 0;	//let so that scores can be changed
let compScore = 0;
const userScore_span = document.getElementById("user-score");	//get all the elements that need to be changed
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_span = document.getElementById("reset");		//FIX THIS 
const count = "1...2...3!";
//const userScore_span = document.getElementById("user-score").animate;
//Done initializing variables for later use.

function main(){
  countDown();
  rock_div.addEventListener('click', function(){
      game("r");                                      //Use console.log, open browser console and check to see.
})                                                   
    paper_div.addEventListener('click', function(){
      game("p");           
})                                              
    scissors_div.addEventListener('click', function(){
      game("s");           
}) 
    reset_span.addEventListener('click', function(){
      reset();
  })
}
main();

function reset() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "Click to start!";
}

function countDown(){
  rock_div.addEventListener('click', function(){
    result_p.innerHTML = count;
  })
  paper_div.addEventListener('click', function(){
    result_p.innerHTML = count;
  })
  scissors_div.addEventListener('click',function(){
    result_p.innerHTML = count;
  })
};

function getComputerChoice() {							 //This function gives you a random choices from the array getComputerChoice
    const choices = ['r', 'p', 's'];						        //console.log("hello" + userChoice); use this to test user choices
    const randomNumber = Math.floor(Math.random()* 3);				//use console.log(Math.floor(Math.random()* 3)) to check numbers on console
    return choices[randomNumber]; 						            //give me a random choice from the array. 
}
									                                //use this to test random choice-> console.log(getComputerChoice());
function game(userChoice){
    const compChoice = getComputerChoice();
			   				                                        	//Test computer choice, always different console.log(computerChoice);		           				                                    //test user choice, always the same!console.log(userChoice);
    switch(userChoice + compChoice){ //parameter userChoice combined with compChoice will give rs,pr,sp etc
      case "rs":
      case "pr":
      case "sp":
        setTimeout(win,2000,userChoice, compChoice);	
        //CHANGE THIS TO A FUNCTION THAT KEEPS SCORE FOR USER->console.log("User wins!");
      break;

      case "rp":
      case "ps":
      case "sr":
        setTimeout(lose, 2000,userChoice, compChoice);				                                        //CHANGE THIS TO A FUNCTION THAT KEEPS SCORE FOR USER ->console.log("Computer wins!");
      break;

      case "rr":
      case "pp":
      case "ss":
        setTimeout(draw, 2000,userChoice, compChoice);				                                        //CHANGE THIS TO A FUNCTION THAT KEEPS SCORE FOR USER ->console.log("Computer wins!");
      break;
}
}
function win(userChoice, compChoice) {
    userScore++;                                                  //console.log("user has won!");
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "User's".fontsize(4).sup();
    const smallCompWord = "Computer's".fontsize(4).sup();
    result_p.innerHTML = `${smallUserWord} ${convertToWord(userChoice)} beats ${smallCompWord} ${convertToWord(compChoice)}. You win!`; //ES6, used tilde "`" to wrap and "${}" for variables, to eliminate plus signs and quotes!
    //userScore_span.animate([])
  }

function lose(userChoice, compChoice) {
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "User".fontsize(4).sup();
    const smallCompWord = "Computer".fontsize(4).sup();
    result_p.innerHTML = `${smallCompWord} ${convertToWord(compChoice)} beats ${smallUserWord} ${convertToWord(userChoice)}. You lose!`; //ES6
}
function draw (userChoice, compChoice){
    result_p.innerHTML = `It's a draw!`; //ES6
}
//turn convert to word to convert to the div!
function convertToWord(letter){
  if (letter === "r")
    return "Rock";
  if (letter === "p")
    return "Paper";
  if (letter === "s")
    return "Scissors";
}





