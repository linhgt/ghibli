import React, {Component} from "react";
import "../css/Entry.css";

class Entry extends Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name,
            description:props.description,
            year:props.year,
            rating:props.rating,
            picture:props.picture,
        }
    }

    render(){
        return(
            <div className="entry-container">
                <div className ="entry-content">
                    <div className="header-title">
                        <div id="picture"></div>
                        <div id="title"></div>
                        <div id="year-rating">Year:/Rating:</div>
                    </div>
                    <div className="description">
                        <p>{this.state.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Entry;