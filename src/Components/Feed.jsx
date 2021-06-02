import SinglePaff from './SinglePaff';
import './style/feed.css';

function Feed(props) {
  return <div className="feed">
      {
        props.children.length ?
        props.children.map((e)=>{
          return <SinglePaff key={e.id} props={e} />
        })
        :
        <p>no paffs to display</p>
      }
    </div>
}
export default Feed;
