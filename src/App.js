import React from 'react';
import ToDoList from './components/ToDoList/ToDoList'
import ToDoItem from './components/ToDoItem/ToDoItem'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todosArray: [],
    };
  }

  // componentDidMount = () => {
  //   const todosArray = localStorage.getItem('todosArray')
  //   if(todosArray) {
  //     console.log('Has todos',todosArray);
  //   } else {
  //     console.log('No todos');
  //   }
  // }

  componentDidMount() {
    axios.get('/api/todos').then((res) => {
      this.setState({
        todosArray: res.data,
      })
    })
  }

  render() {
    return(
      <div>
        <ToDoItem></ToDoItem>
        <ToDoList></ToDoList>
      </div>
    );
  }
}

export default App;
