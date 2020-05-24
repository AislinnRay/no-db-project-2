import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem'

class ToDoList extends React.Component {

    render() {
        const { todosArray } = this.props; // ===  const todosArray=this.props.todosArray

        return(
        <div className='todoListContainer'>
            {
                todosArray.map((_todo, _index) => {
                    //console.log(_todo)
                    return(
                        <ToDoItem 
                        deleteTodo={this.props.deleteTodo} // this can be destructured to deleteTodo = {deleteTodo}
                        updateTodo={this.props.updateTodo}
                        //updateTodoFn={this.updateTodo} 
                        key={_index} 
                        todoElement={_todo}/>
                    )
                })
            }
        </div>
        );
    }

    // updateTodo = (todoAddStr) => {
    //     this.props.updateTodoFn(todoAddStr);
    // }

}

export default ToDoList