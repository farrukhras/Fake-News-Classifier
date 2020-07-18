import React, { Component } from 'react' ;
import Todos from './Todos'
import AddTod from './AddForm'

class App extends Component {
  state = {
    todos: [
    
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    }) ;

    this.setState({
      todos 
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random() ;
    let todos = [...this.state.todos, todo] ;
    this.setState({
      todos 
    })
  }

  render () {
    return (
      <div className='todo-app container'>
        <h1>Fake News Detector</h1>
        <AddTod addTodo={this.addTodo}/>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
        <div class="footer">
          <p>Bay Area Hacks</p>
        </div>
      </div>
    ) ;
  }
}

export default App ;