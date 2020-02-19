function calculate() {

  var name = document.getElementById('name').value;
  var alt_cm = document.getElementById('alt_cm');
  var weight = document.getElementById('peso');
  var res = document.getElementById('res');

  var alt = Number.parseFloat(alt_cm.value);
  var peso = Number.parseFloat(weight.value);

  alt = alt / 100;

  var M =  peso / (alt * alt);

  if (M < 16) {
    res.innerHTML = `${name} possui índice de masssa corp igual a ${M.toFixed(2)}, sendo classificado como: Baixo peso mt grave!`;
  } else if (M >= 16 && M <= 16.99) {
    res.innerHTML = `${name} possui índice de masssa corp igual a ${M.toFixed(2)}, sendo classificado como: Baixo peso grave!`;
  } else if (M >= 17 && M <= 18,49) {
    res.innerHTML = `${name} possui índice de masssa corp igual a ${M.toFixed(2)}, sendo classificado como: Baixo peso!`;
  } else if (M >= 18.50 && M <= 24.99) {
    res.innerHTML = `${name} possui índice de masssa corp igual a ${M.toFixed(2)}, sendo classificado como: Peso normal!`;
  } else if (M >= 25 && M <= 29.99) {
    res.innerHTML = `${name} possui índice de masssa corp igual a ${M.toFixed(2)}, sendo classificado como: Sobrepeso!`;
  } else if (M >= 30 && M <= 34.99) {
    res.innerHTML = `${name} possui índice de masssa corp igual a ${M.toFixed(2)}, sendo classificado como: Obesidade 1!`;
  } else if (M >= 35 && M <= 39.99) {
    res.innerHTML = `${name} possui índice de masssa corp igual a ${M.toFixed(2)}, sendo classificado como: Obesidade 2!`;
  } else if(M > 40) {
    res.innerHTML = `${name} possui índice de masssa corp igual a ${M.toFixed(2)}, sendo classificado como: Obesidade 3!`;
  } else {
    res.innerHTML = 'Value undefined, try again!';
  };  
  console.log(name);
  console.log(M.toFixed(2));
};