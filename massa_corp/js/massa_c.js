function calculate() {

  const name = document.getElementById('name').value;
  const alt_cm = document.getElementById('alt_cm').value;
  const weight = document.getElementById('peso').value;
  const res = document.getElementById('res');

  let alt = Number.parseFloat(alt_cm);
  let peso = Number.parseFloat(weight);

  alt = alt / 100;

  let M = peso / (alt * alt);

  let clsf = '';

  if (M < 16) {
    clsf = 'Baixo peso mt grave!';
  } else if (M >= 16 && M <= 16.99) {
    clsf = 'Baixo peso grave!';
  } else if (M >= 17 && M <= 18.49) {
    clsf = 'Baixo peso!';
  } else if (M >= 18.50 && M <= 24.99) {
    clsf = 'Peso normal!';
  } else if (M >= 25 && M <= 29.99) {
    clsf = 'Sobrepeso!';
  } else if (M >= 30 && M <= 34.99) {
    clsf = 'Obesidade 1!';
  } else if (M >= 35 && M <= 39.99) {
    clsf = 'Obesidade 2!';
  } else if(M >= 40 && M <= 60) {
    clsf = 'Obesidade 3!';
  } else {
    clsf = 'Value undefined, try again!';
  }; 
  
  res.innerHTML = `${name} possui índice de masssa corp igual a ${M.toFixed(2)}, sendo classificado como: ${clsf}`;

  console.log(M.toFixed(2));
};