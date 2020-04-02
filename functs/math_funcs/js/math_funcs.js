let number = 7.5;
let opNumber = 8;
let negtNumber = -15;

function math(number) {

  document.write(`<b> Value: </b> ${number} <br/> <br/>`);
  
  
  // returns the value of x rounded to its nearest integer;

  let newNumber = Math.round(number);
  document.write(`| <b> The integer closer: </b> ${newNumber} |`);

  document.write('<br/>');

  
  // returns the value of x rounded DOWN to its nearest integer;

  newNumber = Math.floor(number);
  document.write(`| <b> Integer closer below: </b> ${newNumber} |`);
  
  document.write('<br/>');

  
  // returns the value of x rounded UP to its nearest integer;

  newNumber = Math.ceil(number);
  document.write(`| <b> Integer closer above: </b> ${newNumber} |`);

  document.write('<br/> <br/> <br/>');



  document.write(`<b> Value: </b> ${opNumber} <br/> <br/>`);


  // returns the value of x to the power of y;

  let newOp = Math.pow(opNumber, 2);
  document.write(`| <b> 8^2: </b> ${newOp} |`);

  document.write('<br/>');

  
  // returns the square root of x;

  newOp = Math.sqrt(opNumber * opNumber);
  document.write(`| <b> Square root: </b> ${newOp} |`);

  document.write('<br/> <br/> <br/>');


  document.write(`<b> Value: </b> ${negtNumber} <br/> <br/>`);

  // returns the absolute (positive) value of x;

  let newNegNumber = Math.abs(negtNumber);
  document.write(`| <b> Positive number: </b> ${newNegNumber} |`);

  document.write('<br/> <br/>');

  let randomNumber = Math.random(1, 7);
  document.write(`| <b> Random number: </b> ${randomNumber} |`);
};

math(number);