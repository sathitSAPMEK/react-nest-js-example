import React from 'react'
import './App.css'

class App extends React.Component {

  state = {
    messages: "Default message"
  };

  componentDidMount() {
    fetch('http://localhost:2000/courses/hello')
    .then(res => res.json())
    .then(obj => {
      this.setState({messages: obj.message});
    })
  }

  render() {
    return <p>{ this.state.messages }</p>;
  }
}

export default App
