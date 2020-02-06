// importing modules
import React, { Component } from 'react';

// importing components
import Hero from '../components/Hero';

// importing stylesheet
import './Landing.css';

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      joke: ''
    };
  }

  componentDidMount(){
    this.handleRandomJoke();
  }

  handleRandomJoke = () => {
    fetch(`/randomJoke`, { // fetch random joke from chuck norris api
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
          this.setState({ joke: data.joke.value });
        })
        .catch((err) => (console.log(err)));
  };

  handleGetNewJoke = () => {
    this.handleRandomJoke();
  };

  render(){
    return (
      <div className="landingPage">
        <Hero />
      </div>
    );
  }
};

export default LandingPage;

