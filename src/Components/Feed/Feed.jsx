import SinglePaff from './SinglePaff';
import './style/feed.css';
import {observer} from 'mobx-react';
import TipPaffStore from './Stores/TipPaffStore';
const tipStore = new TipPaffStore();


function Feed(props) {
  return <div className="feed">
      {
        props.children.length ?
        props.children.map((e)=>{
          return <SinglePaff isUserFeed={props.isUserFeed} content={e.content} date={e.date} tipAmount={e.tipAmount} author={e.author} id={e.id} tipStore={tipStore} />
        })
        :
        <p>no paffs to display</p>
      }
    </div>
}
export default observer(Feed);
