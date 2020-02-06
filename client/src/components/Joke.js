// importing modules 
import React from 'react';
// importing stylesheet
import './Joke.css';

const joke = ({ joke, handleGetNewJoke }) => (
    <div className="joke">
        <div className="joke__container">
            <p className="joke__text">{joke}</p>
            <button 
                onClick={handleGetNewJoke}
                className="joke__btn">NEW JOKE</button>
        </div>
    </div>
);

export default joke;