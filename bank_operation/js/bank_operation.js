let saldo = 82;
let transf = 70;

function condicion(saldo, transf) {

  if(saldo < transf || !saldo) {
    document.write('Não há saldo suficiente para concluir a transferência!');
  } else {
    document.write('Operação concluída com sucesso!');
  }
};

condicion(saldo, transf);