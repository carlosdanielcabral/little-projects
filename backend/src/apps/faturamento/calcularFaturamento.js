const dados = require('./dados.json');

const diasComFaturamento = dados.filter((dado) => dado.valor !== 0);

const calcularMenorValor = () => {
  let menorValor = diasComFaturamento[0].valor;

  for (let i = 0; i < diasComFaturamento.length; i += 1) {
    if (diasComFaturamento[i].valor < menorValor) menorValor = diasComFaturamento[i].valor;
  }

  return menorValor;
};

const calcularMaiorValor = () => {
  let maiorValor = diasComFaturamento[0].valor;

  for (let i = 0; i < diasComFaturamento.lemgth; i += 1) {
    if (diasComFaturamento[i].valor > maiorValor) maiorValor = diasComFaturamento[i].valor;
  }

  return maiorValor;
};

const calcularMediaMensal = () => {
  const faturamentoTotal = diasComFaturamento.reduce((acc, dado) => dado.valor + acc, 0)
    .toFixed(6);
  const media = faturamentoTotal / diasComFaturamento.length;

  return media;
};

const calcularDiasComMediaMaior = () => {
  const media = calcularMediaMensal();

  const diasComMediaMaior = diasComFaturamento.filter((dado) => dado.valor > media);

  return diasComMediaMaior.length;
};

const main = () => ({
  menorValor: calcularMenorValor(),
  maiorValor: calcularMaiorValor(),
  diasComFaturamentoMaior: calcularDiasComMediaMaior(),
});

module.exports = main;
