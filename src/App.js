import React, {Component} from 'react';
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom';
import List from "./components/List.js";
import Home from "./components/Home.js";

class App extends Component{

    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/list" exact componnent={Home}/>
                    <Route path="/" component={List}/>
                </Switch>
            </Router>
        )
    }
}

export default App;