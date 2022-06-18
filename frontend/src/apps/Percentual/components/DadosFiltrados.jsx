import React from 'react';

const DadosFiltrados = ({ resultados }) => (
  <table>
    <thead>
      <tr>
        <th>
          Estado
        </th>

        <th>
          Percentual
        </th>
      </tr>
    </thead>

    <tbody>
      {
        resultados.map((resultado) => (
          <tr>
            <td>{resultado.sigla ? resultado.sigla : resultado.estado}</td>
            <td>{ resultado.percentual }</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default DadosFiltrados;
