import React, { Component } from 'react';
import classes from './FlowerVariety.css';

import getData from '../../data';
import FlowerVarieties from '../FlowerVarieties';
import Varieties from '../Varieties';



class FlowerVariety extends Component {


    constructor(props) {
        super(props)
        this.state = {
            controls: [],
        }
    }
    componentDidMount() {
        this.setState({ controls: getData() }, () => {
            //  this.calculateTotal()
        })

    }

    // create a handleChangle method here, that calls the handleChange from props
    // So you can update the state in FlowerVallley with values from the input

    handleChange = e => {
        // e.preventDefault();
        this.props.handleChange(e)

    };

    render() {
        return (


            <div className={classes.FlowerVariety}>

                <FlowerVarieties flowers={this.props.flowers}
                    label={this.props.label}
                    name={this.props.name}
                    price={this.props.price}

                />

                <Varieties flowers={this.props.flowers}

                    added={this.props.added}
                    removed={this.props.removed}
                    disabled={this.props.disabled} />

            </div>


        );
    }



}

export default FlowerVariety;