import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
class Question extends Component{
  render(){
    return(
      <div>
      <h1>Вопросы</h1>
      <nav>
      <ul>
      <li><Link to="/quests/1">Вопрос 1</Link></li>
      <li><Link to="/quests/2">Вопрос 2</Link></li>
      </ul>
      </nav>
      </div>
      )
  }
}
export default Question