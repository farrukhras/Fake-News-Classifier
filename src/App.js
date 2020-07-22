import React, { Component } from 'react' ;
import AllNews from './News'
import AddNew from './AddNews'
import axios from 'axios';

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

    axios.post('https://faker-detector.herokuapp.com/', {'text': neWs.content})
            .then((res) => {
              neWs.id = Math.random() ;
              neWs.content = neWs.content + ' :' ;
              neWs.truth = res.data ;
              let news = [...this.state.news, neWs] ;
              this.setState({
                news 
              })
            }).catch((error) => {
                alert("Server is busy, please try again later!")
            });
  }

  render () {
    return (
      <div className='todo-app container'>
        <h1>Fake News Detector</h1>
        <AddNew addNews={this.addNews}/>
        <AllNews allNews={ this.state.news } deleteNews={ this.deleteNews }/>
        <div className="footer">
          <p>Bay Area Hacks</p>
        </div>
      </div>
    ) ;
  }
}

export default App ;