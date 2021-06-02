import Navbar from "../../Components/Navbar";
import PublishPaff from './Components/PublishPaff';

function Home() {
  return (
    <div className="home">
      <Navbar address="0x0aslkdjaslkdjkhkjhqwejl" />
      <PublishPaff address="0x0aslkdjaslkdjkhkjhqwejl" publishPaff={()=>{}} />
    </div>
  )
}
export default Home;