import './style/navbar.css';
import {observer} from 'mobx-react';
import NoMetamask from './Components/NoMetamask';
import LoggedIn from './Components/LoggedIn';
import SearchBar from './Components/SearchBar';
import SearchBarStore from './Stores/SearchBarStore';

function Navbar({userAddress}) {
  return (
    <nav>
      {
        userAddress?
        <LoggedIn userAddress={userAddress} />
        :<NoMetamask />        
      }
      <SearchBar store={new SearchBarStore()} />
    </nav>
  )
}
export default observer(Navbar);