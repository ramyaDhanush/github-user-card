import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="header">The GitHub Cards App</div>
      <Card/>
    </div>
  );
}

export default App;
// const App = ({ title }) => (
//   <div className="header">{title}</div>
// );

// ReactDOM.render(
//   <App title="The GitHub Cards App" />,
//   mountNode,
// );