import "./Searchbox.css";
import searchIcon from "../assets/images/icon-search.svg";

export default function Searchbox({ searchHandler, value, onClickHandler }) {
  return (
    <div className="input-group">
      <label htmlFor="searchBox" className="hidden-label" >
        Search
      </label>
      <input
        value={value}
        type="text"
        name="searchBox"
        id="searchBox"
        onChange={(event) => searchHandler(event.target.value)}
      />
        <div className="search-btn" onClick={onClickHandler}>
          <img src={searchIcon} alt="Search icon" />
        </div>
    </div>
  );
}
