import React, { useState } from "react";
import './Fibonacci.css';

const Fibonacci = () => {
  const [numero, setNumero] = useState(0);
  const [resultado, setResultado] = useState(false);
  const [haResultado, setHaResultado] = useState(false);

  const verificarFibonacci = async (e) => {
    e.preventDefault();
    const URL = `http://localhost:3001/fibonacci?numero=${numero}`;
    const response = await fetch(URL);
    const data = await response.json();
    setHaResultado(true);
    setResultado(data.pertenceASequencia);
  }

  return (
    <div className="fibonacci-page">

      <header>
        <h1>Fibonacci</h1>
      </header>

      <main>
        <h2>Digite um número e descubra se ele pertence à sequência de Fibonacci.</h2>

        <form onSubmit={ verificarFibonacci }>
          <input
            onChange={ (e) => setNumero(e.target.value) }
            placeholder="Digite um número"
            type="number"
            value={ numero }
          />

          <button
            type="submit"
          >
            Ver resultado
          </button>
        </form>

        <section className="resultado">
          {
            haResultado
              && <h3>{resultado ? 'Pertence à sequência' : 'Não pertence à sequência'}</h3>
          }
        </section>
      </main>
    </div>
  );
};

export default Fibonacci;
