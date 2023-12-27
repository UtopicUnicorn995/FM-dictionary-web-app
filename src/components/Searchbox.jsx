import './Searchbox.css'
import searchIcon from '../assets/images/icon-search.svg'

export default function Searchbox(){
    return(
        <div className="input-group">
            <input type="text" name="searchBox" id="searchBox" />
            <label htmlFor="searchBox">
                <img src={searchIcon} alt="" />
            </label>
        </div>
    )
}