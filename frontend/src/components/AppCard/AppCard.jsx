import React from 'react';
import { Link } from 'react-router-dom';
import './AppCard.css';

const AppCard = ({ nome, rota }) => (
  <Link to={rota} className="app-link">
    <div className="app-card">
      <h2>{nome}</h2>
    </div>
  </Link>
);

export default AppCard;
