import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/Home.js";
import List from "./components/List.js";

class App extends Component{

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/list" component={List}/>
                </Switch>
            </Router>
        )
    }
}

export default App;