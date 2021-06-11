import './style/App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Landing from './Pages/Landing/Landing';
import BlockchainData from './Stores/BlockchainData';
import BlockchainService from './Services/BlockchainService';

import {observer} from "mobx-react";

const blockchainData = new BlockchainData();

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Landing 
            userAddress={blockchainData.getUserAddress()}
            BlockchainService={new BlockchainService()}            
          />
        </Route>
        <Route path="/profile/:address">
          <Profile 
            userAddress={blockchainData.getUserAddress()}
            BlockchainService={new BlockchainService()} 
          />
        </Route>
      </Router>
    </div>
  );
}
export default observer(App);
