import './style/publishPaff.css';

function PublishPaff({address, publishPaff}) {
  return (
    <div className="publishPaff">
      <input type="text" placeholder="Publish a Paff"/>
      <button>publish</button>
    </div>
  )
}
export default PublishPaff;
