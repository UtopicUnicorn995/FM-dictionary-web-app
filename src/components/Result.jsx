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
        <div onClick={handlePlay} disabled={isPlaying} className='audio-btn'>
          <img src={audioIcon} alt="" />
        </div>
      );

      console.log(resultInformation)
  return (
    <>
    <div className="result-header__container">
      <h1>{resultInformation["word"]} <span>{resultInformation['phonetic']}</span></h1>
      {renderAudioButton}
    </div>
    <Definitions meanings={resultInformation['meanings']}/>
    <div className="source-container">
      <p>Source</p> <a href={resultInformation['sourceUrls'][0]} target='_blank'>
      {resultInformation['sourceUrls'][0]}
      </a>
    </div>
    </>
  );
}
