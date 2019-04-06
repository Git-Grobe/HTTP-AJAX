import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import Friends from './Components/Friends'

class App extends Component {

  constructor () {
    super();
    this.state = {
      data: []
    }
  }
  
  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      this.setState({data: response.data})
    })
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <Friends friends={this.state.data}/>
        {console.log(this.state.data)}
      </div>
    );
  }
}

export default App;
