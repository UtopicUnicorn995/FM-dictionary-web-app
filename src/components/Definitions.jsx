import "../components/Definitions.css";

export default function Definitions({ meanings }) {
  const item = meanings.map((meaning) => console.log(meaning));
  return (
    <>
      {meanings.map((meaning, index) => {
        return (
          <section className="definitions" key={index}>
            <div className="line-container">
              <h2>{meaning["partOfSpeech"]}</h2>
              <div className="line"></div>
            </div>
            <div className="meanings-container">
              <h3>Meaning</h3>
              <ul>
                {meaning["definitions"].map((meaning, index) => (
                  <li key={index}>
                    {meaning["definition"]}
                    {meaning["example"] && (
                      <span className="meaning-example">
                        "{meaning["example"]}"
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {meaning["synonyms"].length > 0 && (
              <div className="synonyms-container">
                <p className="synonym">
                  <span className="synonym-title">Synonyms:</span> 
                  {
                    meaning['synonyms'].map((synonym, index) => (
                      <span key={index} className="items">{synonym}{meaning["synonyms"].length > 1 && ', '}</span>
                    ))
                  }
                </p>
              </div>
            )}
          </section>
        );
      })}
    </>
  );
}
