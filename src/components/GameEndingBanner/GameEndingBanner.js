import React from 'react';

function GameEndingBanner({ gameStatus, answer }) {

  // { status, guessCount } = gameStatus;
  console.log(gameStatus, answer);
  // console.log(gameStatus);
  const { status, guessCount } = gameStatus;

  console.log({ status, guessCount });

  if (status === 'active') {
    return (<></>);
  }

  return (
    <div className={['banner', (status === 'won' ? 'happy' : 'sad')].join(' ')} >
      {(status === 'won') ?
        (<p>
          <strong>Congratulations!</strong> Got it in
          <strong>{' '}{guessCount} guesses</strong>.
        </p>)
        :
        (
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        )
      }
    </div>
  );

}

export default GameEndingBanner;
