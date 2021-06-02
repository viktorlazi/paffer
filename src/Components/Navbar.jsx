import Identicon from 'react-identicons';
import {Link} from 'react-router-dom';
import './style/navbar.css';

function Navbar({address}) {
  return (
    <nav>
      <div className="profile-icon">
        <Link to={`./profile/${address}`}>
          <Identicon string={address} />
          <h3>{address.substring(0, 12)}</h3>
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="type address or handle..." />
      </div>
    </nav>
  )
}
export default Navbar;