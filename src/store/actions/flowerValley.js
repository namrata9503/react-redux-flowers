import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_FLOWER,
        flowerName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_FLOWER,
        flowerName: name
    };
};

export const setFlowers = (flowers) => {
    return {
        type: actionTypes.SET_FLOWERS,
        flowers: flowers
    }
};

export const fetchFlowersFailed = () =>{
    return{
        type: actionTypes.FETCH_FLOWERS_FAILED
    };
};

export const initFlowers = () => {
    return dispatch => {
        axios.get('https://flowers-valley.firebaseio.com/flowers.json')
        .then(resp => {
            dispatch(setFlowers(resp.data));
        })
        .catch(error => {
            dispatch(fetchFlowersFailed());
        });
    };
};