import React from 'react'
import SingleMovie from './singlemovie.js'
import './MovieRow.css';
import SingleRow from './singleRow.js';

class MovieRow extends React.Component {    
   state={
      element:1
    }
    updateElement=(value)=>{
      this.setState({element:value});
    }

  render() {
    return(
      <>{
        this.state.element == 1 ?
          <SingleRow element={this.state.element} updateElement={this.updateElement} movie={this.props.movie}/>
        :(
          <SingleMovie updateIndex={this.props.updateIndex} updateElement={this.updateElement} element={this.state.element} movie={this.props.movie} bgcolor={this.props.bgcolor}/>
        )
      }</>
    )
  } 
}

export default MovieRow