import React, {Component} from 'react';
import GhibliStudio from "./img/ghibli-background.jpg";
import "./css/App.css";

class App extends Component{
    render(){
        return(
                <div className="container">
                    <div className="main-content">
                         <div className="title">
                             <h2>Welcome to</h2><h1 id="ghibli-info">Ghibli Info!</h1>
                         </div>
                    </div>
                </div>
        )
    }
}

export default App;