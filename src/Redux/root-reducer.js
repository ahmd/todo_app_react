import todoReducer from "./todo/todo.reduser"
import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    todos: todoReducer,
    form: formReducer
});

