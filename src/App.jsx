import './style/App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Landing from './Pages/Landing/Landing';
import BlockchainData from './Stores/BlockchainData';

const blockchainData = new BlockchainData();

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
