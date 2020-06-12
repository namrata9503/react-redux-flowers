
import React, { Component } from 'react';
import classes from './CheckoutSummery.css';
import { Link } from 'react-scroll';

import Button from '../../UI/Button/Button';
import getData from '../../Bouquet/data';
import FlowerVarieties from '../../Bouquet/FlowerVarieties/FlowerVarieties';



class CheckoutSummery extends Component {
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

    render() {
        return (
            <div className={classes.CheckoutSummery}>
                <h1 id="Head" className={classes.Heading}>We hope you will like This BOUQUET..!!</h1>
                <div className={classes.ContainerBtn}>
                    <Button
                        clicked={this.props.cancelCheckout} btnType="Danger">CANCEL</Button>
                    {/* <Button
                        clicked={this.props.continueCheckout} btnType="Success">NEXT</Button> */}
                    <Button btnType="Success">
                        <Link
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={this.props.continueCheckout}

                        >Double Click To &rarr; Fill Contact Details</Link>
                    </Button>
                </div>


                <div className={classes.Items} >
                    {this.state.controls.map(ctrl => (
                        <FlowerVarieties
                            flowers={this.props.flowers[ctrl.type]}
                            key={ctrl.name}
                            label={ctrl.label}
                            name={ctrl.name}
                            price={ctrl.price} />
                    ))}

                </div>
                <div className={classes.Up}
                >
                    {/* <span>&#8593;</span> */}

                    <Link
                        activeClass="active"
                        to="Head"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                    ><span>&#8593;</span>
                        {/* <i  >&#xf102;</i> */}

                    </Link>
                </div>
            </div>
        );
    }



};


export default CheckoutSummery;