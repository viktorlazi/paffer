import {observer} from 'mobx-react';
import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileInfo from './Components/ProfileInfo';
import PublishPaff from './Components/PublishPaff';
import {useParams} from 'react-router-dom';

function Profile({userAddress, BlockchainExplorer}) {
  
  const address = useParams().address;
  return <div className="profile">
      <Navbar userAddress={userAddress} />
      {
        userAddress===address?
        <PublishPaff publishPaff={()=>{
          BlockchainExplorer.fetchPaffs();
          //BlockchainExplorer.uploadPaff('alo', userAddress); 
        }}/>
        :<ProfileInfo address={address} />
      }
      <Feed>
        {[
          ...BlockchainExplorer.getAuthorPosts('viktor')
        ]}
      </Feed>
    </div>
}
export default observer(Profile);