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
        apps.map((app) => <AppCard nome={app.nome} rota={app.rota} />)
      }
    </main>
  </div>
)

export default Home;
