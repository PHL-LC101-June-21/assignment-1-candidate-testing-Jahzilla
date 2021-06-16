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


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your Name?");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswers.push(input.question(questions[0]));
console.log("\n");
candidateAnswers.push(input.question(questions[1]));
console.log("\n");
candidateAnswers.push(input.question(questions[2]));
console.log("\n");
candidateAnswers.push(input.question(questions[3]));
console.log("\n");
candidateAnswers.push(input.question(questions[4]));
console.log("\n");


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if(candidateAnswers[0] === correctAnswers[0]){
  console.log(`\nWhen asked "${questions[0]}", you answered: \n"${candidateAnswers[0]}." \nThat is correct!`);
} else {
  console.log(`\nWhen asked "${questions[0]}", you answered:\n${candidateAnswers[0]}\nI'm sorry that is incorrect. \nThe correct answer is ${correctAnswers[0]}.`);
}
if(candidateAnswers[1] === correctAnswers[1]){
  console.log(`\nWhen asked "${questions[1]}", you answered: \n"${candidateAnswers[1]}." \nThat is correct!`);
} else {
  console.log(`\nWhen asked "${questions[1]}", you answered:\n${candidateAnswers[1]}\nI'm sorry that is incorrect. \nThe correct answer is ${correctAnswers[1]}.`);
}
if(candidateAnswers[2] === correctAnswers[2]){
  console.log(`\nWhen asked "${questions[2]}", you answered: \n"${candidateAnswers[2]}." \nThat is correct!`);
} else {
  console.log(`\nWhen asked "${questions[2]}", you answered:\n${candidateAnswers[2]}\nI'm sorry that is incorrect. \nThe correct answer is ${correctAnswers[2]}.`);
}
if(candidateAnswers[3] === correctAnswers[3]){
  console.log(`\nWhen asked "${questions[3]}", you answered: \n"${candidateAnswers[3]}." \nThat is correct!`);
} else {
  console.log(`\nWhen asked "${questions[3]}", you answered:\n${candidateAnswers[3]}\nI'm sorry that is incorrect. \nThe correct answer is ${correctAnswers[3]}.`);
}
if(candidateAnswers[4] === correctAnswers[4]){
  console.log(`\nWhen asked "${questions[4]}", you answered: \n"${candidateAnswers[4]}." \nThat is correct!`);
} else {
  console.log(`\n When asked "${questions[4]}", you answered:\n${candidateAnswers[4]}\nI'm sorry that is incorrect. \nThe correct answer is ${correctAnswers[4]}.`);
}



  let grade;
  

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