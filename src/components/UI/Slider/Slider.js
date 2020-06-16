import React, { useState } from 'react';

import classes from './Slider.css';
import ImgSlide from './ImgSlide';
import i1 from '../../../assets/images/slide5.jfif';
import i2 from '../../../assets/images/slide11.jfif';
import i3 from '../../../assets/images/slide8.jfif';
import i4 from '../../../assets/images/slide6.jfif';
import i5 from '../../../assets/images/slide3.jfif';
import i6 from '../../../assets/images/slide9.jfif';
import i7 from '../../../assets/images/slide7.jfif';
import i8 from '../../../assets/images/slide12.jfif';



const slider = (props) => {
    const [x, setX] = useState(0);
    let sliderArr = [
    <ImgSlide src={i1}/>,
    <ImgSlide src={i2}/>,
    <ImgSlide src={i3}/>,
    <ImgSlide src={i4}/>,
    <ImgSlide src={i5}/>,
    <ImgSlide src={i6}/>,
    <ImgSlide src={i7}/>,
    <ImgSlide src={i8}/>
    
];

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }

    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }
    return (
        <div className={classes.Slider}>
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index}
                            style={{ transform: `translateX(${x}%)` }}
                            className={classes.Slide}
                        >
                            {item}
                        </div>
                    );
                })
            }
            <button className={classes.goLeft} onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button className={classes.goRight} onClick={goRight}>
            <i class="fas fa-chevron-right"></i>

            </button>
        </div>
    );
};

export default slider;