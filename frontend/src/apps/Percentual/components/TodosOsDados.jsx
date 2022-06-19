import React from 'react';

const TodosOsDados = ({ resultados }) => (
  <table>
    <thead>
      <tr>
        <th>
          Estado
        </th>

        <th>
          Sigla
        </th>

        <th>
          Faturamento
        </th>

        <th>
          Percentual
        </th>
      </tr>
    </thead>

    <tbody>
      {
        resultados.map((resultado, index) => (
          <tr key={`${index + 1}-resultado-total`}>
            <td>{ resultado.estado}</td>
            <td>{ resultado.sigla }</td>
            <td>{ resultado.valor}</td>
            <td>{ resultado.percentual}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default TodosOsDados;
