import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import FlowerVarieties from './FlowerVarieties/FlowerVarieties';
import classes from './Bouquet.css';
import FlowerVariety from './FlowerVarieties/FlowerVariety/FlowerVariety';
import Gallery from '../Bouquet/FlowersGallery/Gallery';
import getData from '../Bouquet/data';

import Pink from '../../assets/images/david-t-ccY4ElLlhMY-unsplash.jpg';
import Orange from '../../assets/images/alex-blajan-FlUbZ-2S014-unsplash.jpg';
import Yellow from '../../assets/images/michalis-mantelos-M-cLz_qU5Jg-unsplash.jpg';
import Rose from '../../assets/images/ivan-jevtic-p7mo8-CG5Gs-unsplash.jpg';
import Purple from '../../assets/images/amanda-kariella-w49DIgDoNIk-unsplash.jpg';
import Sunflower from '../../assets/images/andrew-small-EfhCUc_fjrU-unsplash.jpg';
import SamllBlue from '../../assets/images/photo-1575256365204-09d9e19d7c82.jfif';
import Petal from '../../assets/images/fanny-cote-diAUSrGdnT8-unsplash.jpg';
import SamllPink from '../../assets/images/nicolas-reymond-tNm6DL_nO-o-unsplash.jpg';
import Dark from '../../assets/images/amanda-kariella-w49DIgDoNIk-unsplash.jpg';
import White from '../../assets/images/quino-al-BlMj6RYy3c0-unsplash.jpg';
import YellowRose from '../../assets/images/sergee-bee-NaaiDPPlXwk-unsplash.jpg';
import Blue from '../../assets/images/stanislav-kondratiev-lYCfUQHp5Mk-unsplash.jpg';
import Red from '../../assets/images/steven-shou-Sn6S_RJ8XkU-unsplash.jpg';
import MultiPink from '../../assets/images/miroslava-ct_zXHu8rcM-unsplash.jpg';
import CheckoutSummery from '../Order/CheckoutSummery/CheckoutSummery';
import Varieties from './FlowerVarieties/Varieties';




const pink = <img src={Pink} style={{ width: '100%' }} />
const orange = <img src={Orange} style={{ width: '100%' }} />
const yellow = <img src={Yellow} style={{ width: '100%' }} />
const rose = <img src={Rose} style={{ width: '100%' }} />
const purple = <img src={Purple} style={{ width: '100%' }} />
const sunflower = <img src={Sunflower} style={{ width: '100%' }} />
const samll = <img src={SamllBlue} style={{ width: '100%' }} />
const petal = <img src={Petal} style={{ width: '100%' }} />
const smallPink = <img src={SamllPink} style={{ width: '100%' }} />
const dark = <img src={Dark} style={{ width: '100%' }} />
const white = <img src={White} style={{ width: '100%' }} />
const yellowRose = <img src={YellowRose} style={{ width: '100%' }} />
const blue = <img src={Blue} style={{ width: '100%' }} />
const red = <img src={Red} style={{ width: '100%' }} />
const multiPink = <img src={MultiPink} style={{ width: '100%' }} />


class Bouquet extends Component {


    // let transformedFlowers = Object.keys(props.flowers)
    //     .map(igkey => {
    //         return [...Array(props.flowers[igkey])].map((_, i) => {
    //             // console.log('bouquet igkey ' + igkey + (i + 1));
    //             return <FlowerVarieties key={igkey + i} type={igkey} />

    //         });
    //     })
    //     .reduce((arr, el) => {

    //         return arr.concat(el)
    //     }, []);



    // if (transformedFlowers.length === 0) {
    //     transformedFlowers = <p className={classes.select}>Please select flowers in your Bouquet..</p>
    // }



    // create a handleChangle method here, that calls the handleChange from props
    // So you can update the state in FlowerVallley with values from the input

    // handleChange = e => {
    //     props.handleChange(e)
    // };


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


    render() {
        console.log('controls render', this.props.flowers)

        return (
            <div className={classes.flowers}>

                {/* <FlowerVarieties type="orange" />
            <FlowerVarieties type="purple" /> */}
                {/* <FlowerVarieties >

            {transformedFlowers}

            </FlowerVarieties> */}


                {/* <FlowerVariety /> */}

                {/* <FlowerVarieties flowers={props.flowers[ctrl.type]}
                        key={ctrl.name} /> */}
                {/* <Varieties flowers={props.flowers[ctrl.type]}
                        key={ctrl.name}
                        price={ctrl.price}

                        handleChange={props.handleChange}
                        added={() => props.varietyAdded(ctrl.type)}
                        removed={() => props.varietyRemoved(ctrl.type)}/> */}

                {this.state.controls.map(ctrl => (
                    <FlowerVariety                      
                       flowers={this.props.flowers[ctrl.type]}

                        key={ctrl.name}
                        label={ctrl.label}
                        name={ctrl.name}
                        price={ctrl.price}

                        handleChange={this.props.handleChange}
                        added={() => this.props.varietyAdded(ctrl.type)}
                        removed={() => this.props.varietyRemoved(ctrl.type)}
                      //  disabled={this.props.disabled[ctrl.type]}
                    />

                ))
                }
            </div>
        );
    }

};

export default Bouquet;