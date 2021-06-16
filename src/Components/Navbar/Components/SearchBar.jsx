import {observer} from 'mobx-react';

function SearchBar({store}) {
  return (
    <form className="search-bar" onSubmit={(e)=>{e.preventDefault();store.submit()}}>
      <input 
        type="text"
        value={store.getContent()}
        onClick={()=>store.onClick()}
        placeholder="autocompleting search" 
        onChange={e=>store.setContent(e.target)}/>
      <input 
        type="submit"
        style={{display: 'none'}}
        />
      <div className="suggested-addresses">
        {[
          ...store.getProfiles().map(e=>{
            return <a>
              {e.slice(0,5)}
            </a>
          }).slice(0,4)
        ]}
      </div>
    </form>
  )
}
export default observer(SearchBar);
