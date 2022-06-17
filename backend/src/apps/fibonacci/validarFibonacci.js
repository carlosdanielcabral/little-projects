const validarFibonacci = (numero) => {

  const sequenciaDeFibonacci = [0];
  let ultimoNumero = sequenciaDeFibonacci[sequenciaDeFibonacci.length - 1];

  while(sequenciaDeFibonacci[ultimoNumero] < numero) {
    let penultimoNumero = sequenciaDeFibonacci.length >= 2
      ? sequenciaDeFibonacci[sequenciaDeFibonacci.length - 2]
      : 1;
    const proximoNumero = ultimoNumero + penultimoNumero;
    sequenciaDeFibonacci.push(proximoNumero);
    ultimoNumero = proximoNumero;
  }

  return sequenciaDeFibonacci.includes(numero);
};

module.exports = validarFibonacci;
