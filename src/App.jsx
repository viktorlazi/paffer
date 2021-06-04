import './style/App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" >
          <Landing />
        </Route>
        <Route path="/profile/:address" >
          <Profile />
        </Route>
      </Router>
    </div>
  );
}
export default App;
