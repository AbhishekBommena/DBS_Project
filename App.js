// import logo from './logo.svg';
import React from 'react';
import './App.css';
import CardList from "./Card";
import Form from "./Form";
// import testData from "./Card";

class App extends React.Component{
  state={
    profiles:[]
  }
  addNewProfile = (profileData) => {
    console.log(profileData)

    this.setState({
      profiles: [profileData]
    })
  }

  render(){
  return (
    <div className="App">
      <Form onSubmit={this.addNewProfile} />
      {/* onComplete={this.addNewProfile} */}
      <CardList profiles={this.state.profiles}/>
    </div>
  );
}
}

export default App;
