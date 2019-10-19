import React, { Component } from 'react';
import './App.css';
import  DisplayEmployee  from  './components/DisplayEmployee';
import axios from 'axios';

const sampleEmployee = {
  character: '',
  quote : '',
  image: '',
  };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: sampleEmployee
    };
    this.getEmployee = this.getEmployee.bind(this)
    
  }

  getEmployee() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes?count=num')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          employee: data[0],
        });
    });
  }

  render() { 
    return (
      <div>
    <DisplayEmployee employee={this.state.employee} />
    <button type="button" onClick={this.getEmployee}>Get employee</button>
      </div>
      );
  }
}


export default App;
