import './style/navbar.css';
import Login from './Components/Login';
import LoggedIn from './Components/LoggedIn';
import SearchBar from './Components/SearchBar';

function Navbar({address}) {
  return (
    <nav>
      {
        address?
        <LoggedIn address={address} />
        :<Login />        
      }
      <SearchBar />
    </nav>
  )
}
export default Navbar;