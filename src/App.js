import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'; 

const Twitter = require('twitter');
console.log(Twitter);
const keys = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})
class App extends Component {
  // constructor () {
  //   super();
  //   this.state = {
  //     q: "",
  //   }
  // }

  componentDidMount() {
    this.getTweets();
  }

  getTweets = () => {
    const stream = keys.stream('https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json', {track: 'congress'});
    stream.on('data', function(event) {
      console.log(event && event.text);
    });
     
    stream.on('error', function(error) {
      throw error;
    });
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
