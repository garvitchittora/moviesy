import React, { Component } from 'react';
import './seachGener.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'
import { AutoComplete } from 'antd';

const options = [
  { value: 'Action' },
  { value: 'Adventure' },
  { value: 'Animation' },
  { value: 'Comedy' },
  {value:'Crime'},
  {value:"Documentary"},
  {value:"Drama"},
  {value:"Family"},
  {value:"Fantasy"},
  {value:"History"},
  {value:"Horror"},
  {value:"Music"},
  {value:"Mystery"},
  {value:"Romance"},
  {value:"Science Fiction"},
  {value:"TV Movie"},
  {value:"Thriller"},
  {value:"War"},
  {value:"Western"}
];

const GenerMapper = {
    'action': 28,
    'adventure': 12,
    'animation': 16,
    'comedy': 35,
    'crime':80,
    "documentary":99,
    "drama":18,
    "family":10751,
    "fantasy":14,
    "history":36,
    "horror":27,
    "music":10402,
    "mystery":9648,
    "romance":10749,
    "science fiction":878,
    "tv movie":10770,
    "thriller":53,
    "war":10752,
    "western":37
}

class SeachGener extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("12");
  } 

  performSearch = (searchTerm) =>{
    const urlString = "https://api.themoviedb.org/3/discover/movie?api_key=501d3005a9a3c3c50122dbc9168068aa&sort_by=popularity.desc&with_genres=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
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

  searchChangeHandler = (value) => {
    this.performSearch(GenerMapper[value.toLowerCase()])
  }

  render() {
    
    return (
      <div>

    <AutoComplete className="input"
    options={options}
    placeholder="🔍 Search By Gener Name"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
        onSelect={this.searchChangeHandler}
        onSearch={this.searchChangeHandler}
    />

        {this.state.rows}

      </div>
    );
  }
}

export default SeachGener;
