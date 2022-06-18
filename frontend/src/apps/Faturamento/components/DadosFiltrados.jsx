import React from 'react';

const DadosFiltrados = ({ resultados }) => (
  <table>
    <thead>
      <tr>
        <th>
          Menor Valor
        </th>

        <th>
          Maior Valor
        </th>

        <th>
          Número de dias em que o faturamento foi maior que a média mensal
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          { resultados.menorValor }
        </td>

        <td>
          { resultados.maiorValor }
        </td>

        <td>
          { resultados.diasComFaturamentoMaior }
        </td>
      </tr>
    </tbody>
  </table>
);

export default DadosFiltrados;
