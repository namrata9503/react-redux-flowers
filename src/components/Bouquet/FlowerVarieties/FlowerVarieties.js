import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlowerVariety from '../FlowerVarieties/FlowerVariety/FlowerVariety';
import classes from './FlowerVarieties.css';
import Number from '../FlowerVarieties/FlowerVariety/Number';
import getData from '../../Bouquet/data';
import Aux from '../../../hoc/Auxiliary';




class FlowerVarieties extends Component {




    constructor(props) {
        super(props)
        this.state = {
            controls: [],
        }
    }
    componentDidMount() {
        this.setState({ controls: getData() }, () => {
            //  this.calculateTotal()
            // console.log('controls ', this.state.controls)
        })

    }

    render() {
        console.log('flower Varieties name', this.props.name);


        return (
            <Aux>
                <div className={classes.FlowerVariety}>
                    <div className={classes.Picture}>
                        <div className={classes.Label}> {this.props.label}</div>
                    </div>
                    <h5 className={classes.name}><span className={classes.blink}>{this.props.name}</span></h5>
                    <div className={classes.price}>
                        <p className={classes.pprice}>   $ {((this.props.flowers) * (this.props.price)).toFixed(2)}</p>
                        {/* <p>Price : ${this.props.price}</p> */}

                    </div>
                </div>



            </Aux>
            // <div className={classes.flowers}>

            //     {/* <FlowerVarieties type="orange" />
            // <FlowerVarieties type="purple" /> */}

            //     {/* {transformedFlowers} */}
            //     {this.state.controls.map(ctrl => (
            //         <FlowerVariety
            //             flowers={this.props.flowers[ctrl.type]}
            //             key={ctrl.name}
            //             label={ctrl.label}
            //             name={ctrl.name}

            //             price={ctrl.price}

            //         />


            //     ))}



            // </div>
        );
        // <FlowerVariety quantity={this.getProductRows()} />


        // let flowers = null;
        // switch (this.props.type) {
        //     case ('pink'):

        //         (
        //             flowers = <FlowerVariety
        //                 count={this.getProductRows()} />
        //         );
        //         break;
        //     case ('rose'):
        //         flowers = <div className={classes.flower}>
        //             <img className={classes.img__4} />
        //             <h5 className={classes.name}>Red Rose</h5>
        //             <div className={classes.price}>

        //                 <p>Price: $2.3</p>

        //             </div>



        //             <button className={classes.btn}>Contact realtor</button>
        //         </div>;
        //         break;
        //     case ('orange'):

        //         break;

        //     case ('purple'):

        //         break;
        //     case ('yellow'):

        //         break;
        //     case ('white'):

        //         break;
        //     default:
        //         flowers = null;

        // }

        // return flowers;

    }


}
FlowerVarieties.propTypes = {
    type: PropTypes.string.isRequired
};
export default FlowerVarieties;