import React from 'react';
import { connect } from 'react-redux';
import {   addTodoItem } from '../../Redux/todo/todo.action';
import AddTodoItem from '../../Components/AddTodoItem/AddTodoItem.component'
import TodoItemList from '../../Components/TodoItemList/TodoItemList.component';
import './TodoApp.css';


class TodoApp extends React.Component {
   
    onSubmit = event => { 
        this.props.addTodoItem(event);
    };
    render() {
        return (
            <div className='todo-app'>
                <AddTodoItem destroyOnUnmount={false} onSubmit={this.onSubmit} ></AddTodoItem>
                <TodoItemList />
            </div>
        );
    }
}
 
const mapStateToProps = state => ({ 
});

export default connect(
    mapStateToProps,
    { 
        addTodoItem
    }
)(TodoApp);