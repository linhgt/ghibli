import React, {Component}from "react";
import {Item} from "semantic-ui-react";
import CastleInTheSky from "../img/Castle-in-the-sky.jpg";
import "../css/List.css";

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
                        movieList:result
                    });
                },
                (error)=>{
                    console.log(error);
                }
            )
    }

    buildEntry = () =>{
        const movieEntry = [];

        for(const [index, value] of this.state.movieList.entries()){
            movieEntry.push(<Item key={index}><Item.Image size="small" src={CastleInTheSky} /><Item.Content verticalAlign="middle"><Item.Header as="a">{value.title}</Item.Header></Item.Content></Item>)
        }
        return movieEntry;
    }

    componentDidUpdate(){
        
    }

    render(){
        return(
            <div className="list-container">
                <div className="main-content" id="list">
                    <Item.Group>
                        {!this.state.isLoaded ? (
                            <h3>Loading...</h3>
                        ):(this.buildEntry())}
                    </Item.Group>
                </div>
            </div>
        );
    }
}

export default List;