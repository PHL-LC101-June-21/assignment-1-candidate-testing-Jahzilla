const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers =[];
let rightAnswers = 0



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your Name?");
}

function askQuestion() {
  for(let i = 0; i < questions.length; i++){
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswers.push(input.question(questions[i]));
  console.log("\n");
  }



}

function gradeQuiz(candidateAnswers) {
  for (let i = 0; i < questions.length; i++){
      if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      console.log(`\nWhen asked "${questions[i]}", you answered: \n"${candidateAnswers[i]}." \nThat is correct!`);
      rightAnswers += 1;
      
      } else {
      console.log(`\nWhen asked "${questions[i]}", you answered:\n${candidateAnswers[i]}\nI'm sorry that is incorrect. \nThe correct answer is ${correctAnswers[i]}.`);
      
  }

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

}





  let grade = (rightAnswers / (questions.length)) * 100;
  
  
  if(grade >= 80){
    console.log("\nCongratulations you passed!");
  } else {
    console.log("\nI'm sorry you did not answer enough questions correctly. You did not pass.");
  }
  console.log(`\nYou scored ${grade}%. (${rightAnswers} of ${questions.length} correct)`);

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("\nHello, " + candidateName + "!\n");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};