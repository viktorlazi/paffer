import {observer} from 'mobx-react';

function SearchBar({store}) {
  return (
    <form className="search-bar" onSubmit={(e)=>{e.preventDefault();store.submit()}}>
      <input 
        type="text"
        value={store.getContent()}
        onClick={(e)=>store.onClick(e.target)}
        placeholder="autocompleting search" 
        onChange={e=>store.setContent(e.target)}/>
      <input 
        type="submit"
        style={{display: 'none'}}
        />
      <div className="suggested-addresses">
        {[
          ...store.getProfiles().map(e=>{
            return <a href={"http://localhost:3000/profile/"+e}>
              {e.slice(0,5)}
            </a>
          }).slice(0,4)
        ]}
      </div>
    </form>
  )
}
export default observer(SearchBar);
