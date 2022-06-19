import React from 'react';

const TodosOsDados = ({ resultados }) => (
  <table>
    <thead>
      <tr>
        <th>
          Dia
        </th>

        <th>
          Faturamento
        </th>
      </tr>
    </thead>

    <tbody>
      {
        resultados.map((resultado, index) => (
          <tr key={`${index + 1}-resultado`}>
            <td>{ resultado.dia }</td>
            <td>{ resultado.valor }</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default TodosOsDados;
