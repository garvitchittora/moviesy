import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchName from './searchName.js';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import Home from './home.js';
import SeachGener from './searchGener.js';
import { Menu, Dropdown,Rate } from 'antd';


class Initial extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			is_home: 1, 
			v: 0
		}
	}
	componentWillMount(){

	}
	handleClick = (value) => {
		this.setState({is_home: value  });
	}
	updateIndex = (value) =>{
		console.log("Asdasdasd");
		this.setState({v:value})
	}

	render() {
		const {is_home} = this.state;
		console.log("in render");
		var listItems=JSON.parse(localStorage.getItem('movies_wishlist') ? localStorage.getItem('movies_wishlist') : '["Empty"]')
		let menu = []
		console.log(listItems);
		if(listItems){
		menu = (
				<Menu>
					{listItems.map(item => 
						<Menu.Item ><p className="list">{item}</p></Menu.Item> 
					)}
				</Menu>
			);
		}
		
		var RateItems=JSON.parse(localStorage.getItem('movies_rate') ? localStorage.getItem('movies_rate') : '{}');
		let menu1 = []
		console.log(RateItems);
		if(RateItems){
			let rated = []
			for(let key in RateItems){
					console.log(key, RateItems[key])
					rated.push(<Menu.Item><p className="list">{key} : <Rate allowHalf defaultValue={RateItems[key]} disabled /> </p> </Menu.Item>) 
			}
			menu1 = (
						<Menu>
							{rated}
						</Menu>
			);
		}  
		console.log(menu1)
		return (
			<div >
				<div className="header">
						<div className='row1' style={{cursor: 'pointer',display: 'inline'}} onClick={()=>this.handleClick(1)}>
								<td>
								<img alt='logo' className="logo-image" src="logo.png" />
								</td>
								<td>
								<h1 style={{
										marginLeft:'25px',textAlign:'center',color:'white',marginTop:'10px',marginBottom:'0'
								}}>Moviesy</h1> 
								</td>
						</div>
						<div style={{display: 'inline',right: '10px',position: 'absolute',marginTop:"10px"}}  >
								<Dropdown overlay={menu} style={{marginRight:'16px'}}>
										<a className="ant-dropdown-link dropdown" onClick={e => e.preventDefault()} >
										Your Watchlist 
										</a>
								</Dropdown>
								<Dropdown overlay={menu1} style={{marginRight:'16px'}}>
										<a className="ant-dropdown-link dropdown" onClick={e => e.preventDefault()} >
										Your Rating
										</a>
								</Dropdown>
						</div>
					</div>  
						{
					is_home === 1 ?
							<Home handleClick={this.handleClick} />
					:(
							
					is_home === 2 ?
								<SearchName updateIndex={this.updateIndex} handleClick={this.handleClick} />
					:
					<SeachGener updateIndex={this.updateIndex} handleClick={this.handleClick} />
				
					)
				}
			</div>
				
		);
	}
}

ReactDOM.render(<Initial />,document.getElementById('root')
);

serviceWorker.unregister();
