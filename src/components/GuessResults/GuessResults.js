import React from 'react';

function GuessResults({ guesses, answer }) {

    function checkGuess(ch, idx, answer) {
        if (answer[idx] === ch) {
            return "correct"
        } else if (answer.includes(ch)) {
            return "misplaced";
        }
        return "incorrect";
    }

    return (
        <>
            {guesses.map((word, idx) => (
                <p key={idx} className="guess">
                    {word.split('').map((ch, idx) => (
                        <span key={`${ch}-${idx}`} className={['cell', checkGuess(ch, idx, answer)].join(' ')}>{ch}</span>
                    ))}
                </p>
            ))}
        </>
    );
}

export default GuessResults;