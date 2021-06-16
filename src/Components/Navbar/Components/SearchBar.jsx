import {observer} from 'mobx-react';

function SearchBar({store}) {
  return (
    <form className="search-bar" onSubmit={(e)=>{e.preventDefault();store.submit()}}>
      <input 
        type="text"
        value={store.getContent()}
        placeholder="autocompleting search (0x...)" 
        onChange={e=>store.setContent(e.target)}/>
      <input 
        type="submit"
        style={{display: 'none'}}
        />
    </form>
  )
}
export default observer(SearchBar);
