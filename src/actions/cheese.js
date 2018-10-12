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

export const getCheeseAction = () => dispatch => {
    dispatch(fetchCheeseRequest())
    fetch('https://aaron-cheese-app.herokuapp.com/api/cheeses')
        .then((res) => res.json()) 
        .then(res => dispatch(fetchCheesesSuccess(res))) 
        .catch(err => dispatch(fetchCheesesError()));
}