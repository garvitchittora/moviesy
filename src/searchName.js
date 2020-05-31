import React, { Component } from 'react';
import './searchName.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("w")
  } 
  
  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?&sort_by=popularity.desc&api_key=501d3005a9a3c3c50122dbc9168068aa&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results
        var movieRows = []

        results.forEach((movie,i) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow updateIndex={this.props.updateIndex} key={movie.id} movie={movie} bgcolor= { i%2===0 ? '#ccccb3' : 'white'}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }



  searchChangeHandler=(event)=> {
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {

    return (
      <div >

        <input className="input" onChange={this.searchChangeHandler} placeholder="🔍 Search By Movie Name "/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
