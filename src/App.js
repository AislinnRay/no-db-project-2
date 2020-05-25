import React from 'react';
import ToDoList from './components/ToDoList/ToDoList';
import AddToDo from './components/AddToDo/AddToDo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todosArray: [],
    };
  }

  // testing on local storage throws errors :(
  // componentDidMount = () => {
  //   const todosArray = localStorage.getItem('todosArray')
  //   if(todosArray) {
  //     //const savedTodos = todosArray; 
  //     const savedTodos = JSON.parse(todosArray)
  //     this.setState({ todosArray: savedTodos });
  //   } else {
  //     console.log('No todos');
  //   }
  // }

  // addTodo = async (todoAddStr) => {
  //   await this.setState({ todosArray: [...this.state.todosArray, {text: todoAddStr, completed: false}]
  //   })
  //   //localStorage.setItem('todosArray', this.state.todosArray)
  //   localStorage.setItem('todosArray', JSON.stringify(this.state.todosArray))
  //   console.log(localStorage.getItem('todosArray'));
  // }

  // updateTodo = (todoAddStr) => {
  //   const newTodos = this.state.todosArray.map(_todo => {
  //     if(todoAddStr === _todo)
  //       return {
  //         text: todoAddStr.text,
  //         completed: !todoAddStr.completed
  //     } 
  //     else 
  //       return _todo
  //     });
  //   this.setState({todosArray: newTodos});
  //   console.log(newTodos);
  // }

  componentDidMount() {
    axios.get('/api/todos').then((res) => {
      this.setState({
        todosArray: res.data,
      })
    })
  }

  refreshTodoArray = (array) => {  //taking in res.data (which is an array)
    this.setState({todosArray: array}) //this is overriding whatever was on todosArray to be what was on res.data
  }

  deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`).then((res) => {
      // this.setState({
      //   todosArray: res.data,
      // })
      this.refreshTodoArray(res.data) //class components need this to reference the function even in same component
    })
  }

  updateTodo = (id , body) => {
    axios.put(`/api/todos/${id}`, body).then((res) => {
      // this.setState({
      //   todosArray: res.data,
      // })
      this.refreshTodoArray(res.data)
    })
  }

  render() {
    return(
      <div className="App">
        <Header/>
        <span className="Card-Container">
        <div className="Card">
        <AddToDo className="AddToDo"
        refreshTodoArray={this.refreshTodoArray}
        addTodoFn={this.addTodo}/>
        <ToDoList  className="ToDoList" //stuff inside of the <> is just defining properties. does not make new variables 
        deleteTodo={this.deleteTodo} //name the prop 
        updateTodo={this.updateTodo}
        //updateTodoFn={this.updateTodo} 
        todosArray={this.state.todosArray}
        >
        </ToDoList>
        </div>
        </span>
        <Footer/>
      </div>
    );
  }
}

export default App;