import React  from 'react';
import './AddTodoItem.css'
import { Field, reduxForm } from 'redux-form' 
import "react-datepicker/dist/react-datepicker.css";

 class AddTodoItem extends React.Component {
    
    titleField = ({ input }) => {
        return (
            <input type="text" placeholder="What are planning to do ?" {...input} autoComplete='off' />
        );
    };
  
    render() {  
        return (
            <form className="newitem-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.titleField} onFocus={this.handleChange}  onBlur={this.handleChange}  ></Field>
                <button><i class="eva eva-plus-circle-outline"></i></button> 
             </form>
        );
    }

    handleChange = (event)=>{
        event.preventDefault()
    }
    onSubmit = (formValues) => {
        if(formValues.title !== undefined){
            const today = new Date(); 

            this.props.onSubmit({
                created_at: today.toISOString().substring(0, 10),
                status: "no_progress",
                due_date: "",
                order: 0,
                ...formValues
            });
        } 
    };
}
 


export default reduxForm({
    form: 'AddTodoItem'

})(AddTodoItem);