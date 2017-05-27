import React, { Component } from 'react';
import QuestStart from "./about/question.js"
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Question from "./tests.js"

class App extends Component {
  render() {
    return (
     <div>
    <Router>
    <div>
    <Route path="/" component={Question}/>
    <Route path="/quests/:questId" component={QuestStart}/>
    </div>
    </Router>
    </div>
     
    );
  }
}

export default App;
