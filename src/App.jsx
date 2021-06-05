import './style/App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Landing from './Pages/Landing/Landing';
import BlockchainData from './Stores/BlockchainData';
import {observer} from "mobx-react";

const blockchainData = new BlockchainData();

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" >
          <Landing userAddress={blockchainData.getUserAddress()}/>
        </Route>
        <Route path="/profile/:address" >
          <Profile userAddress={blockchainData.getUserAddress()}/>
        </Route>
      </Router>
    </div>
  );
}
export default observer(App);
