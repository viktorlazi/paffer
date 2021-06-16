import Navbar from "../../Components/Navbar/Navbar";
import LandingStore from './Stores/LandingStore';
import {observer} from 'mobx-react';
import Feed from "../../Components/Feed/Feed";

const store = new LandingStore();

function Landing() {
  return (
    <div className="landing">
      <Navbar userAddress={store.service.userAddress} />
      <Feed isUserFeed={false}>
        {[
          ...store.getPaffs()
        ]}
      </Feed>
    </div>
  )
}
export default observer(Landing);
