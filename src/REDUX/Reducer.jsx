const initialState = {
    strings: []
}

export default function stringReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_STRING': return {
            ...state,
            strings: state.strings.concat(action.strings)
        }
    }
    return state;
}