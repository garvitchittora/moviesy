import { SearchOutlined, InstagramOutlined ,TwitterOutlined ,FacebookOutlined , GithubOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import {Button} from 'antd';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
      
    render() {
        
        return (

            <table className='App-table'>
            <tbody>
            
            <tr className='row2'>
                <p>
                Moviesy is an online database of information related to films, television programs, home videos, video games, and streaming content online – including popularity index, pictures , gener , vote average , overview , release date,etc.
                </p>
            </tr>
            <tr className='buttonsearch'>
                <Button icon={<SearchOutlined />} onClick={()=>this.props.handleClick(2)} className='Button1'>Search Movie By Name Here</Button>
                <Button icon={<SearchOutlined />} onClick={()=>this.props.handleClick(3)} className='Button2'>Search Gener By Name Here</Button>
            </tr>
            
            <tr>
                <img alt='cover' width='99%' style={{opacity:'0.2',backgroundSize:'cover',height:'600px'}} src="background.png" />
            </tr>
            <tr style={{ position:'absolute',top:'90%',width: '95%',float:'left',display:'inline'}}>
                <p className='footer1' >© Moviesy 2020 ,All rights reserved</p>  
                <a href='https://www.instagram.com/garvit_chittora_07/' className='linkfooter'>
                    <InstagramOutlined className='footer' />
                </a>
                <a href='https://www.facebook.com/garvit.chittora.90/' className='linkfooter'>
                    <FacebookOutlined className='footer' />
                </a>
                <a href='https://github.com/garvitchittora' className='linkfooter'>
                    <GithubOutlined className='footer' />
                </a>
                <a href='https://twitter.com/ChittoraGarvit' className='linkfooter'>
                    <TwitterOutlined className='footer' />
                </a>
            </tr>
            </tbody>
        </table>
    );
  }
}

export default Home;
