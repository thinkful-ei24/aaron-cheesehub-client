export const fetchCheeseRequest = (value) => {
    return {
        type: 'GET_CHEESES',
        value
    };
};

export const fetchCheesesSuccess = value => {
    return {
        type: 'GET_CHEESES_SUCCESS',
        value
    }
}

export const fetchCheesesError = value => {
    return {
        type: 'GET_CHEESES_ERROR',
        value
    }
}

export const getCheeseAction = value => dispatch => {
    dispatch(fetchCheeseRequest())
    return fetch('http://localhost:8080/api/cheeses')
        .then((res) => {
            return res.json();
        }) .then(res => {
            return dispatch(fetchCheesesSuccess(res))
        }) .catch(err => dispatch(fetchCheesesError()));
}