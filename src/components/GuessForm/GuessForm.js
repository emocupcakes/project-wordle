import React from 'react';

function GuessForm({ submitGuess, gameStatus }) {

    const [guess, setGuess] = React.useState('');

    function handleSubmit(evt) {
        evt.preventDefault();

        console.log({ guess });
        submitGuess(guess);
        setGuess("");
    }

    return (
        <form className="guess-input-wrapper" onSubmit={(evt) => handleSubmit(evt)} >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                disabled={(gameStatus.status === 'active') ? false : true}
                id="guess-input"
                type="text"
                value={guess}
                pattern="[A-Za-z]{5}"
                onChange={(evt) => setGuess(evt.target.value.toUpperCase())}
            ></input>
        </form>
    );
}

export default GuessForm; 