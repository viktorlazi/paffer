import Navbar from "../../Components/Navbar/Navbar";
import {observer} from "mobx-react";

function Landing({userAddress}) {
  return (
    <div className="landing">
      <Navbar userAddress={userAddress} />
    </div>
  )
}
export default observer(Landing);
