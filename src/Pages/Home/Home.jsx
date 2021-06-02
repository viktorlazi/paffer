import Feed from "../Profile/Components/Feed";
import Navbar from "../Profile/Components/Navbar";
import PublishPaff from './Components/PublishPaff';

function Home() {
  return (
    <div className="home">
      <Navbar address="0x0aslkdjaslkdjkhkjhqwejl" />
      <PublishPaff address="0x0aslkdjaslkdjkhkjhqwejl" publishPaff={()=>{}} />
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
  )
}
export default Home;