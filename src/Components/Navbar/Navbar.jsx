import './style/navbar.css';
import {observer} from 'mobx-react';
import NoMetamask from './Components/NoMetamask';
import LoggedIn from './Components/LoggedIn';
import SearchBar from './Components/SearchBar';
import SearchBarStore from './Stores/SearchBarStore';

function Navbar({userAddress}) {
  return (
    <nav>
      <a href="http://localhost:3000">
        <h1>Paffer</h1>
      </a>
      {
        userAddress?
        <LoggedIn userAddress={userAddress} />
        :<NoMetamask />        
      }
      {
        (window.web3 || window.ethereum)?
        <SearchBar store={new SearchBarStore()} />
        :null
      }
    </nav>
  )
}
export default observer(Navbar);