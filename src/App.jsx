import './style/App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Landing from './Pages/Landing/Landing';
import BlockchainData from './Stores/BlockchainData';
import BlockchainService from './Services/BlockchainService';

import {observer} from "mobx-react";

if(!window.web3){
  alert("This app requires blockchain browser to run. Consider using metamask :)")
  alert("Redirecting to metamask.io");
  window.location.href = "https://metamask.io/download";
}

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
