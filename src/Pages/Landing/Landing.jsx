import Navbar from "../../Components/Navbar/Navbar";

function Landing({userAddress}) {
  return (
    <div className="landing">
      <Navbar userAddress={userAddress} />
    </div>
  )
}
export default Landing;
