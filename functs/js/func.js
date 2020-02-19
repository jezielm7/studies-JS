function calculate() {
  var res = document.getElementById('res');
  var comp = document.getElementById('comp').value;
  var larg = document.getElementById('larg').value;

  var cp = Number(comp);
  var lg = Number(larg);

  var area = cp * lg;

  res.innerHTML = `The area of place is: ${area}m².`;
  // return area;
};