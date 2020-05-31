import React, { Component } from 'react';
import {Button} from 'antd';
import './MovieRow.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    viewMovie=()=>{
        this.props.updateElement(0);
    }
      
    render() {
        
        return (

            <div key={this.props.movie.id} className='roweach' >
                <div style={{width:'100%'}}>
                <img alt="no poster" width="70%" height="70%" onClick={this.viewMovie} className="image" style={{borderRadius:'30px',padding: '10px',cursor:'pointer'}} src={this.props.movie.poster_src}/>
                </div>
                <div>
                <h2> {this.props.movie.title}</h2>
                <div style={{display:'block'}}>
                    <Button type="primary" className="button-view" onClick={this.viewMovie} >View More Details</Button>
                </div>
                </div>
            </div> 
    );
  }
}

export default Home;
