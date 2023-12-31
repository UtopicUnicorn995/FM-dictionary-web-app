import { useEffect, useState } from "react";
import Searchbox from "./Searchbox";
import Result from "./Result";
import WordNotFound from "./WordNotFound";
import "./Dictionary.css"

export default function Dictionary() {
  const [searchValue, setSearchValue] = useState("keyboard");
  const [results, setResults] = useState([]);

  console.log(searchValue);
  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = (event) => {
    if(event){
      event.preventDefault()
    }
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      .then((response) => response.json())
      .then((datas) => {
        const newResults = Array.isArray(datas)
          ? 
          datas.map((data, index) => (
               <Result key={index} resultInformation={data} />
            ))
            // <Result resultInformation={datas[0]} />
          : [<WordNotFound key="notFound" />];

        setResults(newResults);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <form className="dictionary" onSubmit={handleSearch}>
      <Searchbox searchHandler={setSearchValue} value={searchValue} onClickHandler={handleSearch} />
      {results}
    </form>
  );
}
