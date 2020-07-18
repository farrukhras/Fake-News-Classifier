import React, { Component } from 'react' ;

class AddTod extends Component {

  state = {
      content: ''
  }

  handleChange = (e) => {
    // API WILL BE INTEGRATED HERE
    // Uske baad set state
      this.setState({
          content: e.target.value
      })
  }

  handleSubmit = (e) => {
      e.preventDefault() ;
      this.props.addTodo(this.state) ;
      this.setState({
          content: ''
      })
  }

  render () {
    return (
      <div className='add-todo'>
        <form onSubmit={this.handleSubmit}>
            <label>Enter Corona related news</label>
            <input type='text' onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    ) ;
  }
}

export default AddTod ;