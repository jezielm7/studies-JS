function verify() {
  var idade = document.getElementById('year');

  var year = Number(idade.value);
  
  switch (year) {
      case 0:
        id.innerHTML = 'The user is a child!';
        break;
  
      case 15:
        id.innerHTML = 'The user is a young!';
        break;
  
      case 30:
        id.innerHTML = 'The user is a adult!';
        break;
  
      case 60:
        id.innerHTML = 'The user is a old man!';
        break;  
    
      default:
        id.innerHTML = 'Value undefined, try again!';
        break;
    }
  };