import Identicon from 'react-identicons';
import {Link} from 'react-router-dom';

function LoggedIn({userAddress}) {
  return (
    <div className="profile-info">
      <Link to={`../profile/${userAddress}`}>
        <Identicon string={userAddress} />
        <h3>{userAddress.substring(0, 15)}</h3>
      </Link>
    </div>
  )
}
export default LoggedIn;