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
            <img alt="no poster" width="70%" height="70%" onClick={this.viewMovie} className="image" style={{borderRadius:'30px',padding: '10px',cursor:'pointer'}} src={this.props.movie.poster_src}/>
          </div>
          <div>
            <h2> {this.props.movie.title}</h2>
            <div style={{display:'block'}}>
              <Button type="primary" onClick={this.viewMovie} >View More Details</Button>
            </div>
        </div>
	</div>,  
    }
  }

  viewMovie=()=> {
    const singlemovie=<SingleMovie updateIndex={this.props.updateIndex} movie={this.props.movie} bgcolor={this.props.bgcolor}/>
    this.setState({element: singlemovie });
  }
  render() {
    return this.state.element
  }
}

export default MovieRow