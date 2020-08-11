import axios from 'axios' 
import { reset } from 'redux-form'; 
import store from '../store';
import _ from 'lodash';


export const getTodoList = () => async dispatch => {
    const res = await axios.get('https://todojsonapi.herokuapp.com/todos');
    dispatch({
        type: 'GET_TODO_LIST',
        payload: res.data
      }); 
};


export const addTodoItem = formValues => async dispatch => {
  const res = await axios.post('https://todojsonapi.herokuapp.com/todos', { ...formValues });
  dispatch({
    type: 'ADD_TODO_ITEM',
    payload: res.data
  }); 
  dispatch(reset('AddTodoItem'));
};


export const deleteTodoItem = id => async dispatch => { // added
  await axios.delete(`https://todojsonapi.herokuapp.com/todos/${id}/`);
  dispatch({
    type: 'DELETE_TODO_ITEM',
    payload: id
  })
}

export const editTodoItem = (id, formValues) => async dispatch => {
  const res = await axios.put(`https://todojsonapi.herokuapp.com/todos/${id}/`, formValues);
  dispatch({
    type: 'EDIT_TODO_ITEM',
    payload: res.data
  }); 
};


export const changeOrder = (Ids) => async dispatch => { 
  const state = store.getState();
  const todos = [];

  Ids.map(id=>(
       todos.push( _.find(state.todos,{id}))
  )) 
 
  dispatch({
    type: 'CHANGE_TODO_ORDER',
    payload: todos
  }); 
};

 

