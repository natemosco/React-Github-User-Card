import React from 'react';
import './App.css';
import axios from "axios";
import UserList from "./components/UserList";

class App extends React.Component {
  state = {
    myGithubData: [],
    followerData: []
  }

  componentDidMount() {
    axios
      .get(' https://api.github.com/users/natemosco')
      .then(res => {
        console.log(res, "res from initial axios request")
        this.setState({
          myGithubData: res.data
        });
        axios
          .get(res.data.followers_url)
          .then(res => {
            console.log("followersURL response", res)
            this.setState({
              followerData: res.data
            });
            console.log(this.state)
          })
          .catch(err => {
            console.log("error from followersURL", err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
  // componentDidUpdate(){
  //   axios
  // }
  render() {
    return (
      <div className="App">
        <UserList myGithubData={this.state.myGithubData} followerData={this.state.followerData}></UserList>
      </div>
    );

  };
};

export default App;
