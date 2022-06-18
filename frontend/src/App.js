import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './apps/Home/Home';
import Fibonacci from './apps/Fibonacci/Fibonacci';
import Faturamento from './apps/Faturamento/Faturamento';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fibonacci" component={Fibonacci} />
        <Route exact path="/faturamento" component={Faturamento} />
      </Switch>
    </Router>
  );
}

export default App;
