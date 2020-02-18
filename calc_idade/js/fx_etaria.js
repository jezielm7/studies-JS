function verify() {
  var idade = document.getElementById('year');

  var year = Number(idade.value);

  if (year >= 0 && year < 15) {
    idd.innerHTML = 'The user is a child!';
  } else if (year >= 15 && year < 30) {
    idd.innerHTML = 'The user is a young!';
  } else if (year >= 30 && year < 60) {
    idd.innerHTML = 'The user is a adult!';
  } else if (year >= 60 && year <= 100) {
    idd.innerHTML = 'The user is a old man!';
  } else {
    idd.innerHTML = 'Value undefined, try again!';
  };
  console.log(year);
};


//   year = 0;
//   switch (year) {
//     case 0 && year < 15:
//       id.innerHTML = 'The user is a child!';
//       break;

//     case year >= 15 && year < 30:
//       id.innerHTML = 'The user is a young!';
//       break;

//     case year >= 30 && year < 60:
//       id.innerHTML = 'The user is a adult!';
//       break;

//     case year >= 60:
//       id.innerHTML = 'The user is a old man!';
//       break;  
  
//     default:
//       id.innerHTML = 'Value undefined, try again!';
//       break;
//   }