import React, { Component } from 'react' ;

class AddNew extends Component {

  state = {
      content: ''
  }

  handleChange = (e) => {   
      this.setState({
          content: e.target.value,
      })
  }

  handleSubmit = (e) => {
      e.preventDefault() ;
      if (this.state.content === '') {
        alert("Please enter text and then continue!") ;
      }

      else {
        this.props.addNews(this.state) ;
      this.setState({
          content: ''
      })
      }   
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

export default AddNew ;