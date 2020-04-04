import React  from "react";
import {Image, Button, Icon} from "semantic-ui-react";
import "../css/Entry.css";

const Entry = ({picture, movie, backToList}) => {
    if(!movie)
    {
        return <div>Error...</div>;
    }
    
    return(
        <div className="entry-container">
            <div className ="entry-content">
                <div className="header-title">
                    <Image id ="picture" src={picture} alt="pic" size="medium"/>
                    <div id="title">{movie.title}</div>
                    <div id="year-rating">Year:{movie.release_date}/Rating:{movie.rt_score}/100</div>
                    <div id="director-producer">Director:{movie.director}/Producer:{movie.producer}</div>
                </div>
                <div className="description">
                    <h1>Synopsis</h1>
                    <p>{movie.description}</p>
                </div>
                <Button icon labelPosition="left" onClick={backToList}>
                    Back To List
                    <Icon name="left arrow" />
                </Button>
            </div>
        </div>
    );
}

export default Entry;