// import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Card from './components/Card';
import CardList from './components/CardList'
import Form from './components/Form'

import React, { Component } from 'react'


class App extends Component {

  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div className="App">
        <div className="header">The GitHub Cards App</div>
        <div className="body">
          <Form onSubmit={this.addNewProfile} />
          <CardList profiles={this.state.profiles} />
        </div>
      </div>
    );
  }
}

export default App


// function App() {
//   return (
//     <div className="App">
//       <div className="header">The GitHub Cards App</div>
//       <Card/>
//     </div>
//   );
// }

// export default App;
// const App = ({ title }) => (
//   <div className="header">{title}</div>
// );

// ReactDOM.render(
//   <App title="The GitHub Cards App" />,
//   mountNode,
// );



// state = {
//   profiles: [],
// };
// addNewProfile = (profileData) => {
//   this.setState(prevState => ({
//     profiles: [...prevState.profiles, profileData],
//   }));
// };
// render() {
//   return (
//     <div>
//       <div className="header">{this.props.title}</div>
//       <Form onSubmit={this.addNewProfile} />
//       <CardList profiles={this.state.profiles} />
//     </div>
//   );
// }	