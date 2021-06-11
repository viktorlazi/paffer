function SinglePaff({content, tipAmount, date}) {  
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
      <div>
        <p className="content">{content}</p>
        <div className="post-info">
          <label className="paff-amount">{tipAmount} PAffs</label>
          <label className="date">on {getDateString(date)}</label>
        </div>
      </div>
    </div>
  )
}
export default SinglePaff;
