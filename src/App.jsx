import './style/App.css';
import {Route, HashRouter as Router} from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import Landing from './Pages/Landing/Landing';
import {observer} from "mobx-react";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/profile/:address">
          <Profile />
        </Route>
      </Router>
    </div>
  );
}
export default observer(App);
