import Identicon from 'react-identicons';

function SinglePaff({isUserFeed, content, tipAmount, date, author}) {  
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
          <a href={"http://localhost:3000/profile/" + author}>
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
            <a href={"http://localhost:3000/profile/" + author}>
              <label className="autor-name">{author.slice(0,8)}</label>
            </a>
            :null
          }
          <label className="paff-amount">{tipAmount} PAffs</label>
          <label className="date">on {getDateString(date)}</label>
        </div>
      </div>
    </div>
  )
}
export default SinglePaff;
