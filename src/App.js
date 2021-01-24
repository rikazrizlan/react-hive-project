import './App.css';

import Home from './pages/Home';
import Spaces from './pages/Spaces';
import SingleSpace from './pages/SingleSpace';
import Navbar from './components/Navbar';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/spaces/" component={Spaces} />
        <Route exact path="/spaces/:slug" component={SingleSpace} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
