import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoListstyle.css';

function ToDoList(props) {
    const updateTodo = (todoAddStr) => {
        props.updateTodo(todoAddStr);
    }
    // render() {
        const { todosArray } = props; // ===  const todosArray=this.props.todosArray

        return(
        <div className='todoListContainer'>
            {
                todosArray.map((_todo, _index) => {
                    //console.log(_todo)
                    return(
                        <ToDoItem 
                        deleteTodo={props.deleteTodo} // this can be destructured to deleteTodo = {deleteTodo}
                        updateTodo={props.updateTodo}
                        //updateTodoFn={this.updateTodo} 
                        key={_index} 
                        todoElement={_todo}/>
                    )
                })
            }
        </div>
        );
    // }

    // updateTodo = (todoAddStr) => {
    //     this.props.updateTodo(todoAddStr);
    // }  this is not used in a functional component
}

export default ToDoList