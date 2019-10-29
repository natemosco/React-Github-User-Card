import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
  state = {
    github: []
  }

  componentDidMount() {
    axios
      .get(' https://api.github.com/users/natemosco')
      .then(res => {
        console.log(res, "res from initial axios request")
        // this.setState({
        // github:[res.data]
        // })
      })
  }
  // componentDidUpdate(){
  //   axios
  // }
  render() {
    return (
      <div className="App">
        <h3>hello?</h3>
      </div>
    );

  };
};

export default App;
