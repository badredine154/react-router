import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom';
import Home from './views/Home';
import Navbar from './Components/Navbar';
import Movies from './views/Movies';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PrivateRoute';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <PublicRoute auth={true} restricted={false} exact path="/" component={Home} />
        <PrivateRoute auth={true} path="/Movies" component={Movies}/>
        <Redirect from="/*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;