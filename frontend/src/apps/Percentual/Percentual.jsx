import React, { useEffect, useState } from "react";
import DadosFiltrados from './components/DadosFiltrados';
import TodosOsDados from "./components/TodosOsDados";
import './Percentual.css';

const Percentual = () => {
  const [resultados, setResultados] = useState({});
  const [optionSelected, setOptionSelected] = useState(1);

  useEffect(() => {
    const recuperarResultados = async () => {
      const URL = 'http://localhost:3001/percentual'
      const resposta = await fetch(URL);
      const dados = await resposta.json();
      setResultados(dados);
    };
    recuperarResultados();
  }, [optionSelected, setResultados]);

  if (Object.keys(resultados).length > 0) {
    return (
      <div className="percentual-page">
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
              Percentual
            </button>
  
            <button
              className={ `todos-os-dados ${optionSelected === 2 && 'selected'}`}
              onClick={ () => setOptionSelected(2) }
              type="button"
            >
              Detalhes
            </button>
          </div>
  
          {
            optionSelected === 1
              ? <DadosFiltrados resultados={resultados} />
              : <TodosOsDados resultados={resultados} />
          }
        </main>
      </div>
    )
  }

  return null;
}

export default Percentual;
