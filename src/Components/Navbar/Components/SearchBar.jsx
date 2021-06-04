import {observer} from 'mobx-react';

function SearchBar({store}) {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={store.getContent()}
        placeholder="type address or handle..." 
        onChange={e=>store.setContent(e.target.value)}/>
    </div>
  )
}
export default observer(SearchBar);
