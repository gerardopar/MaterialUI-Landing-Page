// * importing modules
const fetch = require('node-fetch');

// route: get(/randomJoke)
// gets a random chuck-norris joke 
exports.getRandomJoke = (req, res, next) => {
    fetch(`https://api.chucknorris.io/jokes/random`, { // fetch random joke from chuck norris api
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            return data.json();
        })
        .then((joke) => {
            res
                .status(200)
                .send({
                    joke: joke // send client random joke
                })
        })
        .catch((err) => (console.log(err)));
};