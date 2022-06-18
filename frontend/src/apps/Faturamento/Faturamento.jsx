import React, { useEffect, useState } from "react";
import DadosFiltrados from './components/DadosFiltrados';
import TodosOsDados from "./components/TodosOsDados";
import './Faturamento.css';

const Faturamento = () => {
  const [resultados, setResultados] = useState({});
  const [optionSelected, setOptionSelected] = useState(1);

  useEffect(() => {
    const recuperarResultados = async () => {
      const rota = optionSelected === 1
      ? 'faturamento'
      : 'faturamento/dados';
      const URL = `http://localhost:3001/${rota}`
      const resposta = await fetch(URL);
      const dados = await resposta.json();
      console.log(dados);
      setResultados(dados);
    };
    recuperarResultados();
  }, [optionSelected, setResultados]);

  if (Object.keys(resultados).length > 0) {
    return (
      <div className="faturamento-page">
        <header>
          <h1>Visualização dos dados</h1>
        </header>
  
        <main>
          <div className="options">
            <button
              className={ `dados-filtrados ${optionSelected === 1 && 'selected'}`}
              onClick={ () => setOptionSelected(1) }
              type="button"
            >
              Dados filtrados
            </button>
  
            <button
              className={ `todos-os-dados ${optionSelected === 2 && 'selected'}`}
              onClick={ () => setOptionSelected(2) }
              type="button"
            >
              Todos os dados
            </button>
          </div>
  
          {
            !resultados.dados
              ? <DadosFiltrados resultados={resultados} />
              : <TodosOsDados resultados={resultados.dados} />
          }
        </main>
      </div>
    )
  }

  return null;
}

export default Faturamento;
