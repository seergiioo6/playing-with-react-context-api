import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ThemeContext = React.createContext('light')

class ThemeProvider extends Component {
  state = {theme: 'light'}

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ThemeProvider>
          <ThemeContext.Consumer>
            {
              val => <div> {val} </div>
            }
          </ThemeContext.Consumer>
        </ThemeProvider>

      </div>
    );
  }
}

export default App;
