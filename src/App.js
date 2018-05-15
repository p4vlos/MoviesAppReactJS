import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    console.log("this is my initialiser")

    const movies = [
      {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
       title: "Avengers: Infinity War", overview: "As the Avengers and their allies have continued to protect the world from threats too large"},
      {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
       title: "	The Avengers", overview: "This is my second overview"},
    ]

    this.state = {rows: [
      <p key="1">This is my row 0</p>,
      <p key="2">This is my row 1</p>,
      <p key="3">This is my row 2</p>
    ]}
    
    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.id)
      movieRows.push(<p key={movie.id}>{movie.title}</p>)
    })

    this.state = {rows: movieRows}
  }

  render() {
    return (
      <div className="App">
      
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
              <img alt="app icon" width="50" src= "green_app_icon.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h1>Movies DB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} placeholder="Enter search term"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
