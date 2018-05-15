import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table style={{
          backgroundColor: '#000',
          display: 'block',
          color: '#fff',
          paddingLeft: 16
        }}>
          <tbody>
            <tr>
              <td>
              <img width="50" src= "green_app_icon.svg"/>
              </td>
              <td width="8" />
              <td>
                <h1>Movies DB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
