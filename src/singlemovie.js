import React from 'react'
import './singlemovie.css';
import { Rate,Button } from 'antd';
import $ from 'jquery'
class SingleMovie extends React.Component {

  constructor(props) {
    super(props);
    this.state={
    }
  }

  performSearch() {
    const urlString = "https://api.themoviedb.org/3/movie/" + this.props.movie.id +"?api_key=501d3005a9a3c3c50122dbc9168068aa" ;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log(searchResults)
        this.setState({movie: searchResults})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }
  

add_wish_list = ()=>{
	var wish_list=[];
    wish_list = JSON.parse(localStorage.getItem('movies_wishlist') ? localStorage.getItem('movies_wishlist') : '[]');
    if(!wish_list.includes(this.props.movie.title)){
      wish_list.push(this.props.movie.title);
      localStorage.setItem('movies_wishlist', JSON.stringify(wish_list));
      console.log(wish_list);
      this.setState({
		  value: true
      })
    this.props.updateIndex(1);
    }  
  }
  delete_wish_list=()=>{
	var wish_list=[];
    wish_list = JSON.parse(localStorage.getItem('movies_wishlist'));	  
    wish_list = wish_list.filter(item => item !== this.props.movie.title);
	localStorage.setItem('movies_wishlist', JSON.stringify(wish_list));
	console.log(wish_list);
	this.setState({
		value: false
  })
  console.log(this.props);
  this.props.updateIndex(1);
  
}
rated=(event)=>{
	let rate_list = JSON.parse(localStorage.getItem('movies_rate') ? localStorage.getItem('movies_rate') : '{}');
	rate_list[this.props.movie.title]=event;
	localStorage.setItem('movies_rate', JSON.stringify(rate_list));
  console.log(rate_list);
  let x=Math.floor((Math.random() * 100) + 1);
  console.log(x);
  this.props.updateIndex(x);
}
componentWillMount(){
  this.performSearch()
}

  render() {
	  const wish_list = JSON.parse(localStorage.getItem('movies_wishlist') ? localStorage.getItem('movies_wishlist') : '[]');
    const value  = wish_list.includes(this.props.movie.title);
    console.log(this.state);
    return (
        <table key={this.props.movie.id} style={{backgroundColor:this.props.bgcolor}} className='singleeach'>
        <tbody >

          <tr>
            <td width='30%' >
              <img alt="no poster" className='image' style={{borderRadius:'30px',padding: '10px'}} src={this.props.movie.poster_src}/>
            </td>
            <td>
              <h1 style={{marginLeft:'30px'}}>{this.state.movie ? this.state.movie.title: ''}</h1>
              <p style={{marginLeft:'30px',textAlign:'left'}}>{ this.state.movie ? this.state.movie.overview: ''}</p>
              <div style={{height:'40px'}}>
                <h3 style={{marginLeft:'5%',float:'left'}}>Release Date = {this.state.movie ? this.state.movie.release_date: ''}</h3>
                <h3 style={{marginLeft:'5%',float:'left'}}>Rating = {this.state.movie ? this.state.movie.vote_average: ''}/10</h3>
                <h3 style={{marginLeft:'5%',float:'left'}}>Budget = {this.state.movie ? this.state.movie.budget: ''} USD</h3>
              </div> 
              <div style={{height:'40px'}}>
                <h3 style={{marginLeft:'5%',float:'left'}}>Revenue = {this.state.movie ? this.state.movie.revenue: ''} USD</h3>
                <h3 style={{marginLeft:'5%',float:'left'}}>Runtime = {this.state.movie ? this.state.movie.runtime: ''} minutes</h3>
              </div>
              <div style={{textAlign:'left',height:'40px'}}>
                <h3 style={{marginLeft:'5%',float:'left'}}>Tagline = {this.state.movie ? this.state.movie.tagline: ''}</h3>
                <h3 style={{marginLeft:'5%',float:'left'}}>Genres = {this.state.movie ? this.state.movie.genres.map(genre=> <span>{genre.name},</span>): ''}</h3>

              </div>
              <div style={{marginTop:'30px',height:'40px'}} >
                <h2 style={{float:"left",marginLeft:'20%'}}>Rate Here </h2>
                <Rate allowHalf defaultValue={2.5} style={{float:"left",marginLeft:'1%'}} onChange={this.rated}/>
				{value?
				<Button type="primary" style={{marginLeft:'5%',float:"left"}}  onClick={this.delete_wish_list} danger>Remove To Watchlist</Button>:
				<Button type="primary" style={{marginLeft:'5%',float:"left"}}  onClick={this.add_wish_list} >Add To Watchlist</Button>
				}
              </div>
            </td>  
          </tr>
        </tbody>
      </table>
    )
  }
}

export default SingleMovie