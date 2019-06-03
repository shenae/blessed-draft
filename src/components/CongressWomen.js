import React, { Component } from 'react';
//let url = 'twitter.api';
class CongressWomen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: '@aoc',
            text: [] 
        }
    }
componentDidMount() {
    this.fetchAllTweets; 

    fetchAllTweets () {
        fetch('https://api.twitter.com/1.1/search/tweets.json')
            .then(response) => {
                console.log(response);
                return response.json()
            })   
            .then(data => {
                console.log(data);
                this.setState({
                q: data.follow,
                text: data.text
        })
        return data.text
    })
    }
    
}

}

render () {
    return (
        <div>

        </div>
    );
}

export default CongressWomen;