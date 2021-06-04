import './style/navbar.css';
import {observer} from 'mobx-react';
import Login from './Components/Login';
import LoggedIn from './Components/LoggedIn';
import SearchBar from './Components/SearchBar';
import SearchBarStore from './Stores/SearchBarStore';

function Navbar({address}) {
  return (
    <nav>
      {
        address?
        <LoggedIn address={address} />
        :<Login />        
      }
      <SearchBar store={new SearchBarStore()} />
    </nav>
  )
}
export default observer(Navbar);