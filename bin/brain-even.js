#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumber = Math.floor(Math.random() * 101);
console.log(`Question: ${randomNumber}`);
function answer1(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}
console.log(`Your answers: ${(answer1)}`);
