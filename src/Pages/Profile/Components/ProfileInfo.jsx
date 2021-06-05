import Identicon from 'react-identicons';
import './style/profileInfo.css';

function ProfileInfo({address}) {
  return (
    <div className="profileInfo">
      <h2>
        Posts from: &ensp;
        <Identicon string={address} />
        {address.substring(0, 15)}
      </h2>
    </div>
  )
}
export default ProfileInfo;