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
        resultados.map((resultado) => (
          <tr>
            <td>{ resultado.dia }</td>
            <td>{ resultado.valor }</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default TodosOsDados;
