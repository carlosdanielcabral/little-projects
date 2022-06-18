import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './apps/Home/Home';
import Fibonacci from './apps/Fibonacci/Fibonacci';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fibonacci" component={Fibonacci} />
      </Switch>
    </Router>
  );
}

export default App;
