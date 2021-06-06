import './style/publishPaff.css';

function PublishPaff({publishPaff}) {
  return (
    <div className="publishPaff">
      <input type="text" placeholder="Publish a Paff"/>
      <button onClick={publishPaff}>publish</button>
    </div>
  )
}
export default PublishPaff;