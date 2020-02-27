function verify() {
  var year = document.getElementById('year').value;

  if (year >= 0 && year < 15) {
    id.innerHTML = 'The user is a child!';
  } else if (year >= 15 && year < 30) {
    id.innerHTML = 'The user is a young!';
  } else if (year >= 30 && year < 60) {
    id.innerHTML = 'The user is a adult!';
  } else if (year >= 60 && year <= 100) {
    id.innerHTML = 'The user is a old man!';
  } else {
    id.innerHTML = 'Value undefined, try again!';
  };
  console.log(year);
};
