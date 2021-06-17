import Navbar from "../../Components/Navbar/Navbar";
import LandingStore from './Stores/LandingStore';
import {observer} from 'mobx-react';
import Feed from "../../Components/Feed/Feed";
import NoEthereum from './NoEthereum';

const store = new LandingStore();

function Landing() {
  if(window.web3 || window.ethereum){
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
  }else{
    return <NoEthereum />
  }
}
export default observer(Landing);
