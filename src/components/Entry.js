import React  from "react";
import {Image, Button, Icon, Grid, Header, Label} from "semantic-ui-react";
import "../css/Entry.css";

const Entry = ({picture, movie, backToList}) => {
    if(!movie)
    {
        return <div>Error...</div>;
    }
    
    return(
        <div className="entry-container">
            <div className ="entry-content">
            <Grid celled >
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Image src={picture}/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header as="h1">{movie.title}</Header>
                        <Header as="h3">Year: {movie.release_date}</Header>
                        <Header as="h3">Director: {movie.director}</Header>
                        <Header as="h3">Producer: {movie.producer}</Header>
                        <Header as="h4"></Header>
                        <Label>
                            Rating: 
                            <Label.Detail>{movie.rt_score}/100</Label.Detail>
                        </Label>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
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