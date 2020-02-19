function verify() {
  var n1 = document.getElementById('n1').value;
  var n2 = document.getElementById('n2').value;
  var res = document.getElementById('res');
  var faults = document.getElementById('faltas').value;
  var flt_msg = document.getElementById('flt_msg');

  var media = (n1 + n2) / 2;
  var medF = 7;

  var fault_max = 15;

  if (media >= medF && faults <= fault_max) {
    res.innerHTML = 'The student was approved!';
    med.innerHTML = `Your media: ${media}`;
    flt_msg.innerHTML = `Your faults: ${faults}`;

    media >= 9 ? cngrt.innerHTML = 'Congratulations for your performance!' : cngrt.innerHTML = '';

  } else {

    if (media == 6 && faults <= fault_max || media == 10 && faults > fault_max) {
      res.innerHTML = 'The student is in the final!';
      med.innerHTML = `Your media: ${media}`;
      flt_msg.innerHTML = `Your faults: ${faults}`;
    } else if (media >= medF && faults > fault_max) {
      res.innerHTML = 'The student failed for lack!';
      med.innerHTML = `Your media: ${media}`;
      flt_msg.innerHTML = `Your faults: ${faults}`;
    } else {
      res.innerHTML = 'The student failed!';
      med.innerHTML = `Your media: ${media}`;
      flt_msg.innerHTML = `Your faults: ${faults}`;
    };
  };
};