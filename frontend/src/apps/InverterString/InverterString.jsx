import React, { useState } from "react";
import './InverterString.css';

const InverterString = () => {
  const [resultado, setResultado] = useState({});
  const [string, setString] = useState('');

  const inverterString = async (e) => {
    e.preventDefault();
    const URL = `http://localhost:3001/inverter-string?string=${string}`;
    const resposta = await fetch(URL);
    const dados = await resposta.json();
    setResultado(dados);
  };

  return (
    <div className="inverter-string-page">
      <header>
        <h1>Inverter Strings</h1>
      </header>
  
      <main>
        Digite uma palavra ou frase para invertê-la!

        <form onSubmit={inverterString}>
          <input
            onChange={(e) => setString(e.target.value)}
            type="text"
            value={ string }
          />
          <button
            type="submit"
          >
            Inverter!
          </button>
        </form>

        {
          resultado.stringInvertida && resultado.stringInvertida
        }
      </main>
    </div>
  )
}

export default InverterString;
