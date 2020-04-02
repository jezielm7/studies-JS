let saldo = 70;
let transf = 72;

function condicion(saldo, transf) {

  if(saldo < transf || !saldo) {

    if(saldo === transf - 2) {
      document.write('Operação concluída com sucesso!');
      document.write('Saldo faltante debidatado da conta e será descontado no próximo depósito.');
    } else {
    document.write('Não há saldo suficiente para concluir a transferência!');
    }

  } else {
    document.write('Operação concluída com sucesso!');
  }
};

condicion(saldo, transf);