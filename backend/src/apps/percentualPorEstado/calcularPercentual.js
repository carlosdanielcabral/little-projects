const dados = require('./dados.json');

const valorTotal = dados.reduce((acc, dado) => dado.valor + acc, 0);

const calcularPercentual = () => dados.map((dado) => {
  const { estado, sigla, valor } = dado;
  const percentual = Number(((valor / valorTotal) * 100).toFixed(2));
  return { estado, sigla, valor, percentual };
});

module.exports = calcularPercentual;
