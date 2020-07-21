import React, { Component } from 'react' ;
import AllNews from './News'
import AddNew from './AddNews'

class App extends Component {
  state = {
    news: [
      {id:1, content: 'Stomach acid will kill the coronavirus :', truth: 'False'} ,
    ]
  }

  deleteNews = (id) => {
    const news = this.state.news.filter(neWs => {
      return neWs.id !== id
    }) ;

    this.setState({
      news 
    })
  }

  addNews = (neWs) => {
    // http://127.0.0.1:5000/

    // API handling

    // API handling ends

    neWs.id = Math.random() ;
    neWs.truth = "True" ;
    neWs.content = neWs.content + ' :' ;
    let news = [...this.state.news, neWs] ;
    this.setState({
      news 
    })
  }

  render () {
    return (
      <div className='todo-app container'>
        <h1>Fake News Detector</h1>
        <AddNew addNews={this.addNews}/>
        <AllNews allNews={ this.state.news } deleteNews={ this.deleteNews }/>
        <div class="footer">
          <p>Bay Area Hacks</p>
        </div>
      </div>
    ) ;
  }
}

export default App ;