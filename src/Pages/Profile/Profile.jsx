import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import ProfileInfo from './Components/ProfileInfo';
import {useParams} from 'react-router-dom';

function Profile() {
  const address = useParams().address;
  return <div className="profile">
      <Navbar address="0x0aslkdjaslkdjkhkjhqwejl" />
      <ProfileInfo address={address} />
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