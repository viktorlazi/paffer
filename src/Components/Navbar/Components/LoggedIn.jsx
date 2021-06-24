import Identicon from 'react-identicons';

function LoggedIn({userAddress}) {
  return (
    <div className="profile-info">
      <a href={`${window.location.origin}/apps/paffer/#/profile/${userAddress}`}>
        <Identicon string={userAddress} />
        <h3>{userAddress.substring(0, 15)}</h3>
      </a>
    </div>
  )
}
export default LoggedIn;