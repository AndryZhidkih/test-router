import React, { Component } from 'react';
import  quests from './messeges.js';
class QuestStart extends Component{
	constructor(props){
		super(props);
		const {questId}=this.props.match.params
		this.state={
				quest:quests.find(quest=>parseInt(quest.id,10)===parseInt(questId,10))

	}}

 componentWillReceiveProps(nextProps){
 	const {questId:prevId}=this.props.match.params
 	const {questId:nextId}=nextProps.match.params
 	if(prevId!==nextId){
 	 this.setState({
    quest:quests.find(quest=>parseInt(quest.id,10)===parseInt(nextId,10))
    })
 	}
 }
	
render(){
	const{quest}=this.state
	return(
		<div>
<h1>Question</h1>
<p>{quest.question}</p>
		</div>
		)
	}
}
export default  QuestStart
