import React from 'react';

const imgSlide = ({ src }) => {

    let imgStyles = {
        width: 100+"%",
        height : "auto",
        backgroundSize : "cover",
        backgroundPosition: "center"
    }
    return <img src={src} alt="slide 1" style={imgStyles}></img>
}

export default imgSlide;