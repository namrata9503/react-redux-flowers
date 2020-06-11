import * as actionTypes from '../actions/actionTypes';

const initialState = {
    flowers: null,
    totalPrice: 0,
    error: false,
    touchingFlowers : false
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
                flowers: {
                    ...state.flowers,
                    [action.flowerName]: state.flowers[action.flowerName] + 1
                },
                totalPrice: state.totalPrice + FLOWER_PRICES[action.flowerName],
                touchingFlowers: true
            };
        case actionTypes.REMOVE_FLOWER:
            return {
                ...state,
                flowers: {
                    ...state.flowers,
                    [action.flowerName]: state.flowers[action.flowerName] - 1
                },
                totalPrice: state.totalPrice - FLOWER_PRICES[action.flowerName],
                touchingFlowers: true

            };
        case actionTypes.SET_FLOWERS:
            return {
                ...state,
                flowers: {
                    pink: action.flowers.pink,
                    blue: action.flowers.blue,
                    dark: action.flowers.dark,
                    multiPink: action.flowers.multiPink,
                    orange: action.flowers.orange,
                    petal: action.flowers.petal,
                    purple: action.flowers.purple,
                    red: action.flowers.red,
                    rose: action.flowers.rose,
                    samll: action.flowers.samll,
                    smallPink: action.flowers.smallPink,
                    sunflower: action.flowers.sunflower,
                    white: action.flowers.white,
                    yellow: action.flowers.yellow,
                    yellowRose: action.flowers.yellowRose,

                },
                totalPrice: 0,
                error: false,
                touchingFlowers: false
            };
        case actionTypes.FETCH_FLOWERS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }

};

export default reducer;