import React, {Component}from "react";
import "../css/List.css";
import "../css/App.css";

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            movieList:[],
            isLoaded:false
        }
    }
    
    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({
                        isLoaded:true,
                        movieList:result.items
                    });
                },
                (error)=>{
                    console.log(error);
                }
            )
    }
    render(){
        return(
            <div id="test">Hello</div>
        );
    }
}

export default List;