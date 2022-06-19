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
        resultados.map((resultado, index) => (
          <tr key={`${index + 1}-resultado-filtrado`}>
            <td>{resultado.sigla ? resultado.sigla : resultado.estado}</td>
            <td>{ resultado.percentual }</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default DadosFiltrados;
