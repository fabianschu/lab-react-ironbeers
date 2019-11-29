import React, { Component } from 'react';
import Header from './Header';
import axios from "axios";
import { Link } from "react-router-dom";


export default class Beers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        console.log("did mount");
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                let beers = response.data;
                this.setState({
                    beers: beers
                }, () => console.log(this.state.beers))
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    {this.state.beers.map( beer => {
                        return(
                            <Link to={`beers/${beer._id}`} key={beer._id}>
                                <img height="100px" src={beer.image_url} alt="beer-image"/>
                                <h1>{beer.name}</h1>
                                <p>{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>
                                <hr/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}
