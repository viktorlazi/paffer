import Navbar from "../../Components/Navbar/Navbar";
import LandingStore from './Stores/LandingStore';
import {observer} from 'mobx-react';

const store = new LandingStore();

function Landing() {
  return (
    <div className="landing">
      <Navbar userAddress={store.service.userAddress} />
    </div>
  )
}
export default observer(Landing);
