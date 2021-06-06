import './style/App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Landing from './Pages/Landing/Landing';
import BlockchainData from './Stores/BlockchainData';
import BlockchainExplorer from './Services/BlockchainExplorer';

import {observer} from "mobx-react";

const blockchainData = new BlockchainData();

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Landing 
            userAddress={blockchainData.getUserAddress()}
            BlockchainExplorer={new BlockchainExplorer()}            
          />
        </Route>
        <Route path="/profile/:address">
          <Profile 
            userAddress={blockchainData.getUserAddress()}
            BlockchainExplorer={new BlockchainExplorer()} 
          />
        </Route>
      </Router>
    </div>
  );
}
export default observer(App);
