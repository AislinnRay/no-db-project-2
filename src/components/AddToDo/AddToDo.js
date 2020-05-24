import React from 'react';
import axios from 'axios'

class AddToDo extends React.Component {

    constructor() {
        super();
        this.state = {
            todoAddStr: ''
        }
    }
    
    updateInput = (e) => {
        this.setState({ todoAddStr: e.target.value });
    }
    submitTodo = (e) => {
        const body = {text: this.state.todoAddStr, completed: false}
        e.preventDefault();
        //this.props.addTodoFn(this.state.todoAddStr);
        axios.post(`/api/todos`, body).then((res) => {
            this.props.refreshTodoArray(res.data)
            this.setState({todoAddStr: ''});
        })
    }

    render() {
        return(
        <div className='addTodoContainer'>
            <form onSubmit={(e) => this.submitTodo(e)}>
                <input value={this.state.todoAddStr} id='addTodoInput' onChange={(e) => this.updateInput(e)} type='text'></input>
                <button type='submit'>Add To-Do</button>
            </form>
        </div>
        );
    }
}

export default AddToDo