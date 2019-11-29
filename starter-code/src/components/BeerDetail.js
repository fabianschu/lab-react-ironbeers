import React, { Component } from 'react'
import Header from './Header';
import axios from "axios";


export default class BeerDetail extends Component {
    
    render() {
        


        return (
            <div>
                    <img height="100px" src={this.props.beer.image_url} alt="beer-photo"/>
                    <div>
                        <h1>{this.props.beer.name}</h1>
                        <p>{this.props.beer.attenuation_level}</p>
                    </div>
                    <div>
                        <p>{this.props.beer.tagline}</p>
                        <p>{this.props.beer.first_brewed}</p>
                    </div>
                    <p>{this.props.beer.description}</p>
                    <p>{this.props.beer.contributed_by}</p>
            </div>
        )
    }
}
