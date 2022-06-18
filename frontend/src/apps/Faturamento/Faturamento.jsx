import React, { useState } from "react";
import './Faturamento.css';

const Faturamento = () => {
  const [resultados, setResultados] = useState({});

  useState(() => {
    const recuperarResultados = async () => {
      const URL = 'http://localhost:3001/faturamento';
      const resposta = await fetch(URL);
      const dados = await resposta.json();
      setResultados(dados);
    };
    recuperarResultados();
  }, [setResultados]);

  return (
    <div className="faturamento-page">
      <header>
        <h1>Visualização dos dados</h1>
      </header>

      <main>
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
      </main>
    </div>
  )
}

export default Faturamento;
