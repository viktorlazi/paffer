import Identicon from 'react-identicons';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import {observer} from 'mobx-react';
import {action} from 'mobx';

function SinglePaff({isUserFeed, content, tipAmount, date, author, id, tipStore}) {  
  const getDateString = (timestamp) =>{
    const date = new Date(parseInt(timestamp*1000)); // ili timestamp*1000?
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const fullDate = day+'.'+month+'.'+year+'.';
    return fullDate;
  }
  return (
    <div className="feed-post">
      {
        !isUserFeed?
        <div className="icon">
          <a href={window.location.origin + '/apps/paffer/#' + '/profile/'  + author}>
            <Identicon string={author} />
          </a>
        </div>
        :null
      }
      <div>
        <p className="content">{content}</p>
        <div className="post-info">
          {
            !isUserFeed?
            <a href={window.location.origin + '/apps/paffer/#' + '/profile/' + author}>
              <label className="autor-name">{author.slice(0,8)}</label>
            </a>
            :null
          }
          <label className="paff-amount">
            {parseInt(window.web3.utils.fromWei((tipAmount*100).toString(), 'ether')) } PAffs
            {
              author !== tipStore.userAddress?
              <PlusOneIcon onClick={action(()=>{tipStore.onClick(id)})}/>:null
            }
          </label>
          <label className="date">on {getDateString(date)}</label>
        </div>
      </div>
    </div>
  )
}
export default observer(SinglePaff);
