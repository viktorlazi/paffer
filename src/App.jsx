import './style/App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/profile/:address" >
          <Profile />
        </Route>
      </Router>
    </div>
  );
}
export default App;
