import React from 'react';
import './TodoItemList.css'
import { getTodoList, deleteTodoItem, editTodoItem,changeOrder } from '../../Redux/todo/todo.action';
import { connect } from 'react-redux';
import DragSortableList from 'react-drag-sortable'


class TodoItemList extends React.Component {
    componentDidMount() {
        this.props.getTodoList();
    }
    showDetails = (item) => {
        switch (item.status) {
            case 'no_progress':
                item.status = 'on_progress';
                break;
            case 'on_progress':
                item.status = 'completed';
                break;
            case 'completed':
                item.status = 'no_progress';
                break;
            default:
                item.status = 'no_progress';

        }
        this.props.editTodoItem(item.id, item)

    }
    onSort = (sortedList)=>{
        console.log(sortedList)
        const ids=  sortedList.map(i=>(parseInt(i.content.key)));
        this.props.changeOrder(ids)
    }

    render() {
        const items = this.props.todos.map((item, index) => {
            return {
                content: (
                    <div className={'todo ' + item.status} key={item.id}>
                        <span className="dragHandeler eva eva-more-vertical-outline"></span>
                        <h2 className="no-drag" onClick={() => this.showDetails(item)}>
                            <i class="eva eva-checkmark-circle-2-outline" />
                            {item.title}
                        </h2>
                        <p className="created_at">
                            <i className="eva eva-calendar-outline"></i>
                            {item.created_at}
                        </p>


                        {
                            (item.due_date !== "" && item.due_date !== undefined) &&
                            <p className="due_date">
                                <i className="eva eva-clock-outline"></i>
                    due:  {item.due_date}
                            </p>
                        }

                        <button className="remove-todo" onClick={() => this.props.deleteTodoItem(item.id)}>
                            <i className="eva eva-trash-outline"></i>
                        </button>

                    </div>
                ) 
            }
        })
        return (
            <div className="todo-list">
                <DragSortableList items={items} type="vertical" onSort={this.onSort} > </DragSortableList> 
            </div>
        )
    }


}
const mapStateToProps = state => ({
    todos: Object.values(state.todos)
});

export default connect(
    mapStateToProps,
    {
        getTodoList,
        deleteTodoItem,
        editTodoItem,
        changeOrder
    }
)(TodoItemList);