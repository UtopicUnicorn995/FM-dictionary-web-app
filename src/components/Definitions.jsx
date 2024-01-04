import "../components/Definitions.css";

export default function Definitions({meanings}) {
  const itemMeaning = meanings[0]
  return (
    <section className="definitions">

      <div className="line-container">
        <h2>{itemMeaning['partOfSpeech']}</h2>
        <div className="line"></div>
      </div>
      <div className="meanings-container">
        <h3>Meaning</h3>
        <ul>
            {itemMeaning['definitions'].map(meaning => (
             <li>{meaning['definition']}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
