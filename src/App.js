import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import CardPage from './components/CardPage/CardPage';
import DetailsPage from './components/DetailsPage/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/card/:card' exact render={(props) => <CardPage {...props} />} />
            <Route path='/pokemon/:name' exact render={(props) => <DetailsPage {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
