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

  }

  handleRandomJoke = () => {

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

