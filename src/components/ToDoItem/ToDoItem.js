import React from 'react';
import './ToDoItemstyle.css';

class ToDoItem extends React.Component {
    constructor(){
        super();
        this.state ={
            isEditing: false,
            userInput: '',
        }
    }
    toggleTodo = () => {
        this.props.updateTodo(this.props.todoElement);
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
        <div className="Item" className={"todoItem" + (todoElement.completed ? ' completed' : '')} onClick={this.toggleTodo}
        >
            {this.state.isEditing ? <input className="edit-input" value={this.state.todoAddStr} onChange={(e) => this.updateInput(e)} type='text'/> :<p className="list-text">{todoElement.text}</p>}
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