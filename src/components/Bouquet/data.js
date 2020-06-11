import React from 'react';

import Pink from '../../assets/images/david-t-ccY4ElLlhMY-unsplash.jpg';
import Orange from '../../assets/images/alex-blajan-FlUbZ-2S014-unsplash.jpg';
import Yellow from '../../assets/images/michalis-mantelos-M-cLz_qU5Jg-unsplash.jpg';
import Rose from '../../assets/images/ivan-jevtic-p7mo8-CG5Gs-unsplash.jpg';
import orangeRose from '../../assets/images/alisa-olaivar-5bjgzAPKzpI-unsplash.jpg';
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

const pink = <img src={Pink} alt = "Pink"style={{ width: '100%' }} />
const orange = <img src={Orange} alt = "orange" style={{ width: '100%' }} />
const yellow = <img src={Yellow} alt = "yellow" style={{ width: '100%' }} />
const rose = <img src={Rose} alt = "Rose" style={{ width: '100%' }} />
const purple = <img src={orangeRose} alt = "purple" style={{ width: '100%' }} />
const sunflower = <img src={Sunflower}  alt = "SunFlower" style={{ width: '100%' }} />
const samll = <img src={SamllBlue} alt = "small" style={{ width: '100%' }} />
const petal = <img src={Petal} alt = "Petal" style={{ width: '100%' }} />
const smallPink = <img src={SamllPink} alt = "smallPink" style={{ width: '100%' }} />
const dark = <img src={Dark} alt = "Dark" style={{ width: '100%' }} />
const white = <img src={White} alt = "white" style={{ width: '100%' }} />
const yellowRose = <img src={YellowRose} alt = "yellowrose" style={{ width: '100%' }} />
const blue = <img src={Blue} alt = "Blue" style={{ width: '100%' }} />
const red = <img src={Red} alt = "Red" style={{ width: '100%' }} />
const multiPink = <img src={MultiPink} alt = "Multipink" style={{ width: '100%' }} />

export default function getData() {

        return [
                { label: pink, type: 'pink', name: 'Pink Petal Flower', price: 0.5 },
                { label: orange, type: 'orange', name: 'Beautiful Flower', price: 0.7 },
                { label: yellow, type: 'yellow', name: 'Yellow Flower', price: 0.6 },
                { label: rose, type: 'rose', name: 'Red Rose', price: 0.3 },
                { label: purple, type: 'purple', name: 'Orange Rose', price: 0.4 },
                { label: sunflower, type: 'sunflower', name: 'Pink Sunflower', price: 0.3 },
                { label: samll, type: 'samll', name: 'Small Flower', price: 0.6 },
                { label: petal, type: 'petal', name: 'Three Petaled Flower', price: 0.2 },
                { label: smallPink, type: 'smallPink', name: 'Bright Pink Flower', price: 0.7 },

                { label: dark, type: 'dark', name: 'Blue Petaled Flower', price: 0.4 },
                { label: white, type: 'white', name: 'White Flower', price: 0.8 },
                { label: yellowRose, type: 'yellowRose', name: 'Yellow Rose', price: 0.4 },
                { label: blue, type: 'blue', name: 'Small Blue Flower', price: 0.9 },
                { label: red, type: 'red', name: 'Red Shiny Flower', price: 0.1 },
                { label: multiPink, type: 'multiPink', name: 'MultiPink Flowers', price: 1.4 },

        ];
}
