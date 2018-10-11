const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

const cheeseReducer = (state = initialState, action) => {
    if (action.type === 'GET_CHEESES') {
        return Object.assign({}, state, {
            loading: true
        });
    }
    if (action.type === 'GET_CHEESES_ERROR') {
        return Object.assign({}, state, {
            loading: false,
            error: true
        });
    }
    if (action.type === 'GET_CHEESES_SUCCESS') {
        return Object.assign({}, state, {
            loading: false,
            error: null,
            cheeses: action.value
        });
    }
    else {
        return state;
    }
}

export default cheeseReducer;