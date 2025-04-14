import React from 'react';
import { range } from '../../utils';
import GuessResults from '../GuessResults';

function Guess({ guesses, answer }) {

  return (
    <div className='guess-results'>

      <GuessResults guesses={guesses} answer={answer} />

      {range(6 - guesses.length).map((word, idx) => (
        <p key={idx} className="guess">
          {range(5).map((ch, idx) => (
            <span key={`${ch}-${idx}`} className="cell"></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
