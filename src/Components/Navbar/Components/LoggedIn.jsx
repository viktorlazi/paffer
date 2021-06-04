import Identicon from 'react-identicons';
import {Link} from 'react-router-dom';

function LoggedIn({address}) {
  return (
    <div className="profile-info">
      <Link to={`../profile/${address}`}>
        <Identicon string={address} />
        <h3>{address.substring(0, 15)}</h3>
      </Link>
    </div>
  )
}
export default LoggedIn;