import React from 'react';
import AppCard from '../../components/AppCard/AppCard';
import apps from '../apps.json';
import './Home.css';

const Home = () => (
  <div className="home-page">
    <header>
      <h1>
        Processo Seletivo Target Sistemas | Teste Prático | Carlos Daniel Cabral
      </h1>
    </header>

    <main>
      {
        apps.map((app, index) => (
          <AppCard nome={app.nome} rota={app.rota} key={`${index + 1}-app-${app}`}/>
        ))
      }
    </main>
  </div>
)

export default Home;
