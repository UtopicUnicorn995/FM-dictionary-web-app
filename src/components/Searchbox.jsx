import './Searchbox.css'
import searchIcon from '../assets/images/icon-search.svg'

export default function Searchbox({searchHandler, onClickHandler}){
    return(
        <div className="input-group">
            <input type="text" name="searchBox" id="searchBox" onChange={(event) => searchHandler(event.target.value)}/>
            <label htmlFor="searchBox" onClick={onClickHandler}>
                <img src={searchIcon} alt="" />
            </label>
        </div>
    )
}