import './Result.css'

import Definitions from './Definitions';

import audioIcon from "../assets/images/icon-play.svg";
import { useState } from 'react';


export default function Result({ resultInformation }) {
  const [isPlaying, setIsPlaying] = useState(false)

  console.log(resultInformation)

  let audioUrl = '';
  resultInformation['phonetics'].forEach((result) => {
    if (result['audio']) {
      audioUrl = result['audio'];
    }
  });

  const handlePlay = () => {
    setIsPlaying(true);

    const audio = new Audio(audioUrl);
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    audio.play();
  };
    const renderAudioButton = audioUrl && (
        <button onClick={handlePlay} disabled={isPlaying}>
          <img src={audioIcon} alt="" />
        </button>
      );

  return (
    <>
    <div className="result-header__container">
      <h1>{resultInformation["word"]} <span>{resultInformation['phonetic']}</span></h1>
      {renderAudioButton}
    </div>
    <Definitions meanings={resultInformation['meanings']}/>
    <div className="synonyms-container">
        <p>Synonyms <span>electronic keyboard</span></p>
    </div>
    </>
  );
}
