import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileInfo from './Components/ProfileInfo';
import PublishPaff from './Components/PublishPaff';
import {useParams} from 'react-router-dom';

function Profile({userAddress}) {
  const address = useParams().address;
  return <div className="profile">
      <Navbar userAddress={userAddress} />
      {
        userAddress===address?
        <PublishPaff publishPaff={()=>{}} />
        :<ProfileInfo address={address} />
      }
      <Feed>
        {[
          {
            author: 'viktor',
            content: 'oeowqe',
            tipAmount: '220',
            date: new Date(1)
          },
          {
            author: 'viktor',
            content: 'sfldsf',
            tipAmount: '220',
            date: new Date(1)
          },
          {
            author: 'viktor',
            content: 'oeowqe',
            tipAmount: '220',
            date: new Date(1)
          },
          {
            author: 'viktor',
            content: 'oeowqe',
            tipAmount: '220',
            date: new Date(1)
          }
        ]}
      </Feed>
    </div>
}
export default Profile;