import * as actionTypes from './actions';

const initialState = {
    flowers: {
        
blue: 0,
dark: 0,
multiPink: 
0,
orange: 
0,
petal: 
0,
pink: 
0,
purple: 
0,
red: 
0,
rose: 
0,
samll: 
0,
smallPink: 
0,
sunflower: 
0,
white: 
0,
yellow: 
0,
yellowRose: 0

    },
    totalPrice: 0
};
const FLOWER_PRICES = {
    pink: 0.5,
    yellow: 0.6,
    purple: 0.8,
    white: 0.3,
    rose: 0.3,
    orange: 0.7,
    sunflower: 0.3,
    smallPink: 0.7,
    samll: 0.6,
    petal: 0.2,
    dark: 0.4,
   
    yellowRose: 0.4,
    blue: 0.9,
    red: 0.1,
    multiPink: 1.4
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FLOWER:
            return {
                ...state,
                flowers:{
                    ...state.flowers,
                    [action.flowerName] : state.flowers[action.flowerName] + 1
                },
                totalPrice: state.totalPrice + FLOWER_PRICES[action.flowerName]
            };
        case actionTypes.REMOVE_FLOWER:
            return {
                ...state,
                flowers:{
                    ...state.flowers,
                    [action.flowerName] : state.flowers[action.flowerName] - 1
                },
                totalPrice: state.totalPrice - FLOWER_PRICES[action.flowerName]

            };
        default:
            return state;
    }

};

export default reducer;