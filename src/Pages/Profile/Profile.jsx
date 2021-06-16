import {observer} from 'mobx-react';
import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileInfo from './Components/ProfileInfo';
import PublishPaff from './Components/PublishPaff';
import {useParams} from 'react-router-dom';
import ProfileStore from './Stores/ProfileStore';

let profileStore = new ProfileStore('0x');

function Profile() {
  const address = useParams().address;
  if(profileStore.profileAddress !== address){
    profileStore = null;
    profileStore = new ProfileStore(address);
  }
  return <div className="profile">
      <Navbar userAddress={profileStore.service.userAddress} />
      {
        profileStore.service.userAddress===address?
        <PublishPaff store={profileStore.publishPaffStore}/>
        :<ProfileInfo address={address} />
      }
      <Feed isUserFeed={true}>
        {[
          ...profileStore.getPaffs()
        ]}
      </Feed>
    </div>
}
export default observer(Profile);