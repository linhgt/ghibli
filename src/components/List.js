import React, {Component} from "react";
import {Item, Label} from "semantic-ui-react";
import CastleInTheSky from "../img/Castle-in-the-sky.jpg";
import FromUpOnPoppyHill from "../img/From-up-on-poppy-hill.jpg";
import GraveOfTheFireFiles from "../img/Grave-of-the-fireflies.jpg";
import HowlMovingCastle from "../img/Howl's-moving-castle.jpg";
import KikiService from "../img/Kiki's-delivery-service.jpg";
import MyNeighborYamadas from "../img/My-neighbor-the-yamadas.jpg";
import MyNeighborTotoro from "../img/My-neighbor-totoro.jpg";
import OnlyYesterday from "../img/Only-Yesterday.jpg";
import PomPoko from "../img/Pom-poko.jpg";
import Ponyo from "../img/Ponyo.jpg";
import PorcoRosso from "../img/Porco-Rosso.jpg";
import PrincessMononoke from "../img/Princess-mononoke.jpg";
import SpiritedAway from "../img/Spirited-away.jpg";
import TalesFromEarthSea from "../img/Tales-from-earthsea.jpg";
import TheCatReturns from "../img/The-cat-returns.jpg";
import Arrietty from "../img/The-secret-world-of-Arrietty.jpg";
import PrincessKaguya from "../img/The-tale-of-the-princess-kaguya.jpeg";
import TheWindRises from "../img/The-wind-rises.jpg";
import WhisperOfTheHeart from "../img/Whisper-of-the-heart.jpg";
import Marnie from "../img/When-marnie-was-there.jpg";
import "../css/List.css";
import Entry from "./Entry.js";

class List extends Component{
    //MovieList holds the list of movies fetched from Studio Ghibli API
    constructor(props){
        super(props);
        this.state={
            movieList:[],
            isLoaded:false,
            SelectedMovie:null,
            SelectedMoviePicture:null,
        }
        this.MoviePictures = new Map();
    }
    
    componentDidMount(){
        this.MoviePictures.set("Castle in the Sky", CastleInTheSky);
        this.MoviePictures.set("Grave of the Fireflies", GraveOfTheFireFiles);
        this.MoviePictures.set("My Neighbor Totoro", MyNeighborTotoro);
        this.MoviePictures.set("Kiki's Delivery Service", KikiService);
        this.MoviePictures.set("Only Yesterday", OnlyYesterday);
        this.MoviePictures.set("Porco Rosso", PorcoRosso);
        this.MoviePictures.set("Pom Poko", PomPoko);
        this.MoviePictures.set("Whisper of the Heart", WhisperOfTheHeart);
        this.MoviePictures.set("Princess Mononoke", PrincessMononoke);
        this.MoviePictures.set("My Neighbors the Yamadas", MyNeighborYamadas);
        this.MoviePictures.set("Spirited Away", SpiritedAway);
        this.MoviePictures.set("The Cat Returns", TheCatReturns);
        this.MoviePictures.set("Howl's Moving Castle", HowlMovingCastle);
        this.MoviePictures.set("Tales from Earthsea", TalesFromEarthSea);
        this.MoviePictures.set("Ponyo", Ponyo);
        this.MoviePictures.set("Arrietty", Arrietty);
        this.MoviePictures.set("From Up on Poppy Hill", FromUpOnPoppyHill);
        this.MoviePictures.set("The Wind Rises", TheWindRises);
        this.MoviePictures.set("The Tale of the Princess Kaguya", PrincessKaguya);
        this.MoviePictures.set("When Marnie Was There", Marnie);
        
        //Fetch the list of Ghibli's films
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

    //Return the entry for the selected film
    onSelectedMovie = (movie) => {
        const picture = this.MoviePictures.get(movie.title);
        this.setState({SelectedMovie:movie, SelectedMoviePicture:picture});
    }

    backToList = () => {
        this.setState({SelectedMovie:null});
    }

    //Build the entries
    buildEntry = () =>{
        var movieEntry = [];
        const movies = this.state.movieList;

        for(const [index, value] of movies.entries()){
            const rating = value.rt_score / 10;
            const picture = this.MoviePictures.get(value.title);
            movieEntry.push(<Item key={index}><Item.Image size="small" src={picture} as="a" onClick={()=>this.onSelectedMovie(value)}/><Item.Content verticalAlign="middle"><Item.Header as="a" onClick={() => this.onSelectedMovie(value)}>{value.title}</Item.Header><Item.Extra><Label>{value.release_date}</Label><Label>Rating : {rating}</Label></Item.Extra></Item.Content></Item>)
        }
        return movieEntry;
        
    }

    render(){
        return(
            <div>
                {!this.state.isLoaded ? (<h3>Loading...</h3>): (this.state.SelectedMovie ? <Entry picture= {this.state.SelectedMoviePicture} movie={this.state.SelectedMovie} backToList = {this.backToList}/>:
                    (<div className="list-container">
                        <div className="main-content" id="list">
                            <Item.Group divided>
                                {this.buildEntry()}
                            </Item.Group>
                        </div>
                    </div>))
                }
            </div>
        );
    }
}

export default List;