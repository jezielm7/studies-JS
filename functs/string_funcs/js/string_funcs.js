function string() {
  const name = 'Jeziel marques';

  document.write(name + ' = ' + name.length + ' strings.');
  document.write('<hr/>');
  
  document.write(name[0].toUpperCase() + name[7]);
  document.write(' | ');
  document.write(name.indexOf('m'));
};

string(name);