import React, { Component } from 'react';
import classes from './FlowerVariety.css';
import Aux from '../../../../hoc/Auxiliary';
import Number from '../../FlowerVarieties/FlowerVariety/Number';
import controls from '../../Bouquet';
import getData from '../../data';
import Bouquet from '../../Bouquet';
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
            console.log('controls ', this.state.controls)
        })

    }

    // create a handleChangle method here, that calls the handleChange from props
    // So you can update the state in FlowerVallley with values from the input

    handleChange = e => {
        // e.preventDefault();
        this.props.handleChange(e)
        console.log('flower variety flower handle change : ', this.props.name);

    };

    render() {
        //const { flower } = this.props;
        //console.log(' variety flower : ', this.props);
        console.log('FlowerVariety render', this.props.flowers)


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





                {/* <FlowerVarieties type="orange" />
            <FlowerVarieties type="purple" /> */}

                {/* {transformedFlowers} */}

                {/* {this.state.controls.map(ctrl => (
                    <Varieties
                        flowers={this.props.flowers[ctrl.type]}
                        key={ctrl.name}
                        // label={ctrl.label}
                        // name={ctrl.name}

                        price={ctrl.price}

                        handleChange={this.props.handleChange}
                        added={() => this.props.varietyAdded(ctrl.type)}
                        removed={() => this.props.varietyRemoved(ctrl.type)}
                    // disabled={this.props.disabled[ctrl.type]} 
                    />


                ))} */}



            </div>


            // <Aux>
            //     <div className={classes.FlowerVariety}>
            //         <div className={classes.Picture}>
            //             <div className={classes.Label}>{this.props.label}</div>
            //         </div>
            //         <h5 className={classes.name}><span className={classes.blink}>{this.props.name}</span></h5>

            //         <button className={[classes.Less, classes.button].join(' ')} onClick={this.props.removed} disabled={this.props.disabled} >-</button>
            //         {/* <input type="text" value={this.props.flowers}  onChange={this.handleChange} /> */}

            //         <button className={[classes.More, classes.button].join(' ')} onClick={this.props.added}>+</button>

            //         <div className={classes.count}>
            //             <p className={classes.pcount}> <span>{this.props.flowers}</span></p>
            //         </div>

            //         <div className={classes.price}>
            //             <p className={classes.pprice}>   $ {((this.props.flowers) * (this.props.price)).toFixed(2)}</p>
            //             {/* <p>Price : ${this.props.price}</p> */}

            //         </div>


            //         {/* <button className={classes.btn}>Add Flower</button> */}

            //     </div>
            // </Aux>
        );
    }



}

export default FlowerVariety;