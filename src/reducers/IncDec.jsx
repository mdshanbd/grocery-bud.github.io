const initialState = 10;

const changeNumber = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': return state + 1;
        case 'DEC': return state - 1;
        default: return state;

    }
}

export default changeNumber;