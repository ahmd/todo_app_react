import _ from 'lodash';


const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TODO_LIST':
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            };
        case 'ADD_TODO_ITEM':
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case 'DELETE_TODO_ITEM':
            return _.omit(state, action.payload);
        case 'EDIT_TODO_ITEM':
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        default:
            return state;
    }

}

export default todoReducer;