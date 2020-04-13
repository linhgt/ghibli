import React  from "react";
import {Header, Button, Icon} from "semantic-ui-react";
import "../css/Entry.css";

const Entry = ({picture, movie, backToList}) => {
    if(!movie)
    {
        return <div>Error...</div>;
    }
    
    return(
        <div className="entry-container">
            <div className ="entry-content">
                <Header as="h1" dividing>
                    {movie.title}
                </Header>
                <div id="main-stuff">
                    <div id="box-info">
                        <img src={picture} width="100%" height="auto" alt ="pic"/>
                        <div className="box-row">
                            <div className="box-column">
                                <p className="Noun">Director:</p>
                                <p className="Noun">Producer:</p>
                                <p className="Noun">Year:</p>
                                <p className="Noun">Rating:</p>
                            </div>
                            <div className="box-column">
                                <p>{movie.director}</p>
                                <p>{movie.producer}</p>
                                <p>{movie.release_date}</p>
                                <p>{movie.rt_score}/100</p>
                            </div>
                        </div>
                    </div>
                    <h2>Synopsis:</h2>
                    <p>{movie.description}</p>
                    <Button icon labelPosition='left' onClick={backToList}>
                        <Icon name='left arrow' />
                        Back to List
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Entry;