import React, { Component } from 'react';
import FlowerVariety from '../FlowerVarieties/FlowerVariety/FlowerVariety';
import classes from './Varieties.css';
import Aux from '../../../hoc/Auxiliary';
import getData from '../../Bouquet/data';


class Varieties extends Component {

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
        console.log('Varieties render', this.props.flowers)

        return (


            <Aux>

                <div className={classes.FlowerVariety}>
                <div className={classes.count}>
                        <p className={classes.pcount}> <span >{this.props.flowers}</span></p>
                    </div>
                  
                    <button className={[classes.Less, classes.button].join(' ')} onClick={this.props.removed} disabled={this.props.disabled} >-</button>
                    {/* <input type="text" value={this.props.flowers}  onChange={this.handleChange} /> */}

                    <button className={[classes.More, classes.button].join(' ')} onClick={this.props.added}>+</button>

                    {/* <div className={classes.count}>
                        <p className={classes.pcount}>count <span>{this.props.flowers}</span></p>
                    </div> */}

                    {/* <div className={classes.price}>
                        <p className={classes.pprice}>   $ {((this.props.flowers) * (this.props.price)).toFixed(2)}</p>

                    </div> */}
                </div>
            </Aux>

            //             <Aux>
            //                 <div className={classes.flowers}>

            //                     {/* <FlowerVarieties type="orange" />
            // <FlowerVarieties type="purple" /> */}

            //                     {/* {transformedFlowers} */}
            //                     {this.state.controls.map(ctrl => (
            //                         <FlowerVariety


            //                             handleChange={this.props.handleChange}
            //                             added={() => this.props.varietyAdded(ctrl.type)}
            //                             removed={() => this.props.varietyRemoved(ctrl.type)}
            //                             disabled={this.props.disabled[ctrl.type]}
            //                         />


            //                     ))}



            //                 </div>
            //             </Aux>
        );
    }

};

export default Varieties;
