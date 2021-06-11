import {observer} from 'mobx-react';
import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileInfo from './Components/ProfileInfo';
import PublishPaff from './Components/PublishPaff';
import {useParams} from 'react-router-dom';
import PaffStore from './Stores/PaffStore';

let paffStore = new PaffStore('');

function Profile({userAddress}) {
  const address = useParams().address;
  if(paffStore.userAddress !== address){
    paffStore = new PaffStore(address);
  }
  return <div className="profile">
      <Navbar userAddress={userAddress} />
      {
        userAddress===address?
        <PublishPaff publishPaff={()=>{
          paffStore.pushPaff('alo'); 
        }}/>
        :<ProfileInfo address={address} />
      }
      <Feed>
        {[
          ...paffStore.getPaffs()
        ]}
      </Feed>
    </div>
}
export default observer(Profile);