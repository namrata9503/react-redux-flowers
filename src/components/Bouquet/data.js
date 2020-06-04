import React, { Component } from 'react';

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

export default function getData() {

        return [
                { label: pink, type: 'pink', name: 'Pink Petaled Flower', price: 0.5 },
                { label: orange, type: 'orange', name: 'Beautiful Flower', price: 0.7 },
                { label: yellow, type: 'yellow', name: 'Yellow Flower', price: 0.6 },
                { label: rose, type: 'rose', name: 'Red Rose', price: 0.3 },
                { label: purple, type: 'purple', name: 'Small Purple Flower', price: 0.4 },
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
// export default function getData(){

//     return [
//             {  type: 'pink', name: 'Pink Petaled Flower',  quantity:2, price:6},
//     {  type: 'orange', name: 'Beautiful Orange Flower',  quantity:1, price:2},
//     {  type: 'yellow', name: 'Yellow Flower',  quantity:4, price:8},
//     {  type: 'rose', name: 'Red Rose',  quantity:2, price:4},

//     ]
//   }