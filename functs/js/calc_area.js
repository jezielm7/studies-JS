function calculate() {
  var res = document.getElementById('res');
  var comp = document.getElementById('comp').value;
  var larg = document.getElementById('larg').value;

  var cp = Number(comp);
  var lg = Number(larg);

  var area = cp * lg;

  cp <= 0 || lg <= 0  ? res.innerHTML = alert('Value undefined, try again!') : (

  res.innerHTML = `The terrain has a area of: ${area}m².`
  )};