function string() {
  const name = 'Jeziel Marques Braga';

  const newName = name.replace('Braga', 'B.');

  document.write(newName + ' = ' + (name.length - 3) + ' strings.');
  document.write('<br/> --------- <br/>');
  
  document.write(name[0].toUpperCase() + name[7].toLowerCase());
  document.write(' | ');
  document.write(name.indexOf('M'));
  document.write('<br/> -------- -------- -------- --- <br/>');

  document.write('<b>Your name:</b> ');
  document.write(name.substr(0, 6));

  document.write('<br/>');

  document.write('<b>Middle name:</b> ');
  document.write(name.substr(7, 7));

  document.write('<br/>');

  document.write('<b>Last name:</b> ');
  document.write(name.substr(15, 5));

  document.write('<br/> -------- -------- -------- --- <br/>');

};

string(name);