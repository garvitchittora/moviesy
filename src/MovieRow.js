import React from 'react'
import SingleMovie from './singlemovie.js'
import './MovieRow.css';
import { Button } from 'antd';

class MovieRow extends React.Component {    
  constructor(props) {
    super(props);
    this.state={
      element: <div key={this.props.movie.id} className='roweach' >
  
        
          <div style={{width:'100%'}}>
            <img alt="no poster" width="70%" height="70%" onClick={this.viewMovie.bind(this)} className="image" style={{borderRadius:'30px',padding: '10px',cursor:'pointer'}} src={this.props.movie.poster_src}/>
          </div>
		  {/* <div visibility= {this.state.hover ? "visible" : "hidden"} >
			<h1>YUP</h1>
		  </div> */}
          <div>
            <h2> {this.props.movie.title}</h2>

            {/* <h3 style={{marginLeft:'30px',float:'left',display:'inline'}}>Popularity ={this.props.movie.popularity}</h3>
            <h3 style={{marginLeft:'30px',float:'left',display:'inline'}}>Vote Count ={this.props.movie.vote_count}</h3> */}
            <div style={{display:'block'}}>
              <Button type="primary" onClick={this.viewMovie.bind(this)} >View More Details</Button>
              {/* <Button type="primary" style={{marginLeft:'40px'}} onClick={this.viewMovieOnMovie.bind(this)} >View More Details On MovieDb</Button> */}
            </div>
        </div>
	</div>,  
    }
  }
//   hoverOn(){
// 	this.setState({ hover: true });
//   }

//   hoverOff(){ 
// 	this.setState({ hover: false });    
//   }

  viewMovie() {
    const singlemovie=<SingleMovie updateIndex={this.props.updateIndex} movie={this.props.movie} bgcolor={this.props.bgcolor}/>
    this.setState({element: singlemovie });
  }
  viewMovieOnMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return this.state.element
  }
}

export default MovieRow