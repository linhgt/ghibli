import React, {Component} from 'react';
import "../css/Home.css";

class Home extends Component{
    render(){
        return(
            <div className="container">
                <div className="main-content ">
                        <div className="title fadeInLeft">
                        <h2>Welcome to</h2><h1 id="ghibli-library">Ghibli Library!</h1>
                        </div>
                        <div id="small-container">
                            <button className="ui right labeled icon button">
                                <i className="right arrow icon"></i>
                                Get Started
                            </button>
                        </div>
                </div>
            </div>
        );
    }
}

export default Home;