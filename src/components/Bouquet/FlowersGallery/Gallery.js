
import React, { Component } from 'react';
import classes from './Gallery.css';
import Aux from '../../../hoc/Auxiliary';
import Picture1 from '../../../assets/images/nicolas-reymond-tNm6DL_nO-o-unsplash.jpg';
import Picture2 from '../../../assets/images/papaver-rhoeas-63yI-VSessk-unsplash.jpg';
import Picture3 from '../../../assets/images/stanislav-kondratiev-lYCfUQHp5Mk-unsplash.jpg';
import Picture4 from '../../../assets/images/ivan-jevtic-p7mo8-CG5Gs-unsplash.jpg';
import Picture5 from '../../../assets/images/amanda-kariella-w49DIgDoNIk-unsplash.jpg';
import Picture6 from '../../../assets/images/david-t-ccY4ElLlhMY-unsplash.jpg';
import Picture7 from '../../../assets/images/michalis-mantelos-M-cLz_qU5Jg-unsplash.jpg';
import Picture8 from '../../../assets/images/quino-al-BlMj6RYy3c0-unsplash.jpg';
import Picture9 from '../../../assets/images/white.jfif';
import Picture10 from '../../../assets/images/mark-james-DcClxZQrNo4-unsplash.jpg';
import Picture11 from '../../../assets/images/dlanor-s-ATgfRqpFfFI-unsplash.jpg';
import Picture12 from '../../../assets/images/sergee-bee-NaaiDPPlXwk-unsplash.jpg';
import Picture13 from '../../../assets/images/fanny-cote-diAUSrGdnT8-unsplash.jpg';
import Picture14 from '../../../assets/images/maroon.jfif';
import Picture15 from '../../../assets/images/andrew-small-EfhCUc_fjrU-unsplash.jpg';
import Picture16 from '../../../assets/images/photo-1575256365204-09d9e19d7c82.jfif';
import Picture17 from '../../../assets/images/photo-1549982559-f563a1432d3b.jfif';


class Gallery extends Component {


    render() {
        return (
            <Aux>
                <h4 className={classes.Heading}>Flower Valley <span>&rarr;</span> Find your Favourite Blooming Flowers</h4>

                <div className={classes.Gallery}>
                    <div className={classes.Item1}>
                        <img src={Picture1} alt="Gallery 11" className={classes.Picture} />
                    </div>
                    <div className={classes.Item2}>
                        <img src={Picture2} alt="Gallery 12" className={classes.Picture} />
                    </div>
                    <div className={classes.Item3}>
                        <img src={Picture3} alt="Gallery 13" className={classes.Picture} />
                    </div>
                    <div className={classes.Item4}>
                        <img src={Picture7} alt="Gallery 14" className={classes.Picture} />
                    </div>
                    <div className={classes.Item5}>
                        <img src={Picture5} alt="Gallery 15" className={classes.Picture} />
                    </div>
                    <div className={classes.Item6}>
                        <img src={Picture6} alt="Gallery 16" className={classes.Picture} />
                    </div>
                    <div className={classes.Item7}>
                        <img src={Picture4} alt="Gallery 17" className={classes.Picture} />
                    </div>
                    <div className={classes.Item8}>
                        <img src={Picture8} alt="Gallery 18" className={classes.Picture} />
                    </div>
                    <div className={classes.Item9}>
                        <img src={Picture9} alt="Gallery 19" className={classes.Picture} />
                    </div>
                    <div className={classes.Item10}>
                        <img src={Picture10} alt="Gallery 110" className={classes.Picture} />
                    </div>
                    <div className={classes.Item11}>
                        <img src={Picture11} alt="Gallery 111" className={classes.Picture} />
                    </div>
                    <div className={classes.Item12}>
                        <img src={Picture12} alt="Gallery 112" className={classes.Picture} />
                    </div>
                    <div className={classes.Item13}>
                        <img src={Picture13} alt="Gallery 113" className={classes.Picture} />
                    </div>
                    <div className={classes.Item14}>
                        <img src={Picture14} alt="Gallery 114" className={classes.Picture} />
                    </div>
                    <div className={classes.Item15}>
                        <img src={Picture15} alt="Gallery 115" className={classes.Picture} />
                    </div>
                    <div className={classes.Item16}>
                        <img src={Picture16} alt="Gallery 116" className={classes.Picture} />
                    </div>
                    <div className={classes.Item17}>
                        <img src={Picture17} alt="Gallery 117" className={classes.Picture} />
                    </div>


                </div>
            </Aux>
        );
    }

};

export default Gallery;
