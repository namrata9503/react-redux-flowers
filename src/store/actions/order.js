import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


export const purchaseFlowerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_FLOWER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};
export const purchaseFlowerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_FLOWER_FAIL,
        error: error
    };
};

export const purchaseFlowerStart = () => {
    return {
        type: actionTypes.PURCHASE_FLOWER_START
    };
}

export const purchaseFlower = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseFlowerStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then(resp => {
                dispatch(purchaseFlowerSuccess(resp.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseFlowerFail(error));
            });
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};
export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START

    };
};
export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(response => {
                const fetchOrders = [];

                for (let key in response.data) {
                    fetchOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }

                dispatch(fetchOrdersSuccess(fetchOrders));

            })
            .catch(error => {
                dispatch(fetchOrdersFail(error));


            })
    };
};