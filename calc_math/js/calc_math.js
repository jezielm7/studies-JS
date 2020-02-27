function calculate() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var op = document.getElementById('op').value;

  var n1 = Number.parseFloat(num1);
  var n2 = Number.parseFloat(num2);

  var result = '';

  if (op == 'soma') {
    result = n1 + n2;
  } 
  
  if (op == 'subtração') {
    result = n1 - n2;
  }

  return result;
  
};

document.write = `O resultado é: ${result}`;