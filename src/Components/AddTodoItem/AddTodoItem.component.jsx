import React  from 'react';
import './AddTodoItem.css'
import { Field, reduxForm } from 'redux-form'
// import DatePicker from 'react-datepicker'
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
                <Field name="title" component={this.titleField}></Field>
                <button><i class="eva eva-plus-circle-outline"></i></button>
                {/* <DatePicker showTimeSelect selected={new Date()} onChange={date => this.setStartDate(date)} /> */}
             </form>
        );
    }

    setStartDate(date){
console.log(date)
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

})(AddTodoItem);;