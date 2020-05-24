import React from 'react';
import './style.css';

class ToDoItem extends React.Component {
    constructor(){
        super();
        this.state ={
            isEditing: false,
            userInput: '',
        }
    }
    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todoElement);
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing,
        })
    }

    updateInput(e) {
        console.log(e.target.value)
        this.setState({ userInput: e.target.value }); //e is an event that gets passed in when something happens
    }


    render() {
        const {todoElement, deleteTodo, updateTodo} = this.props
        console.log(this.state.isEditing)
        return(
        <div className="todoItem" //onClick={this.toggleTodo}
        >
            {this.state.isEditing ? <input value={this.state.todoAddStr} onChange={(e) => this.updateInput(e)} type='text'/> :<div>{todoElement.text}</div>}
            <button onClick={ () => deleteTodo(todoElement.id)}>Delete</button>
            {this.state.isEditing && <button onClick={ () => {
                updateTodo(todoElement.id, {text: this.state.userInput})
                this.toggleEdit()}
            }>Save</button>}  
            {/* //&& implies there is a : null at the end of the ternary which is required when using ?  */}

            <button onClick={() => this.toggleEdit()}> {this.state.isEditing ? "Cancel": "Edit"}</button>
            </div>
        );
    }
}

export default ToDoItem