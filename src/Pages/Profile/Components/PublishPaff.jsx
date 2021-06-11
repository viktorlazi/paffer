import './style/publishPaff.css';
import {observer} from 'mobx-react';

function PublishPaff({store}) {
  return (
    <div className="publish">
      <div className="publishPaff">
        <input value={store.content} onChange={e=>{store.setContent(e.target.value)}} type="text" placeholder="Publish a Paff"/>
        <button onClick={()=>store.publish(store.value)}>publish</button>
      </div>
      <p>{store.errorMessage}</p>
    </div>
  )
}
export default observer(PublishPaff);