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
    var listItems=JSON.parse(localStorage.getItem('movies_wishlist') ? localStorage.getItem('movies_wishlist') : '[]')
        let menu = []
        console.log(listItems);
        if(listItems){
        menu = (
            <Menu>
              {listItems.map(item => 
                <Menu.Item>{item}</Menu.Item> 
              )}
            </Menu>
          );
        }
        
        var RateItems=JSON.parse(localStorage.getItem('movies_rate') ? localStorage.getItem('movies_rate') : '{}')
        let menu1 = []
        console.log(RateItems);
        if(RateItems){
			let rated = []
			for(let key in RateItems){ 
                rated.push(<Menu.Item><p>{key} : <Rate allowHalf defaultValue={RateItems[key]} disabled /> </p> </Menu.Item>) 
            }
			menu1 = (
            <Menu>
			  {rated}
            </Menu>
          );
        }  
    return (
      <div >
        <div className="header">
            <div className='row1' style={{cursor: 'pointer',display: 'inline'}} onClick={()=>this.handleClick(1)}>
                <td>
                <img alt='logo' width='50' style={{marginTop:'-15px'}} src="logo.png" />
                </td>
                <td>
                <h1 style={{
                    marginLeft:'25px',textAlign:'center',color:'white',marginBottom:'0'
                }}>Moviesy</h1> 
                </td>
            </div>
            <div style={{display: 'inline',right: '10px',position: 'absolute'}}  >
                <Dropdown overlay={menu} style={{marginRight:'16px'}}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{marginTop:'12px',float: 'right',marginRight: '10px',fontSize:'16px',color:'white'}}>
                    Your Watchlist 
                    </a>
                </Dropdown>
				        <Dropdown overlay={menu1} style={{marginRight:'16px'}}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{marginTop:'12px',float: 'right',marginRight: '10px',fontSize:'16px',color:'white'}}>
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
