const initialState = {
    message: 'hello, saga!',
    takeMessage: 'just take it'
}

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case 'RETURN_MESSAGE': return {
            ...state,
            message: action.message
        };
        case 'RETURN_TAKEMESSAGE': return state.takeMessage
    }
    return state;
}