import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './apps/Home/Home';
import Fibonacci from './apps/Fibonacci/Fibonacci';
import Faturamento from './apps/Faturamento/Faturamento';
import Percentual from './apps/Percentual/Percentual';
import InverterString from './apps/InverterString/InverterString';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fibonacci" component={Fibonacci} />
        <Route exact path="/faturamento" component={Faturamento} />
        <Route exact path="/percentual" component={Percentual} />
        <Route exact path="/inverter-strings" component={InverterString} />
      </Switch>
    </Router>
  );
}

export default App;
