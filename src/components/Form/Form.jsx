import '../../style.css'

import React, { Component } from 'react';

import Input from '../Input/Input.jsx'
// import Button from '../Button/Button.jsx'
import MessageList from '../MessageList/MessageList.jsx';
import Message from '../Message/Message.jsx'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageContent: '',
        };
        // this.getValue = this.getValue.bind(this)
    };
    submitForm =(event)=> {
        console.log('work');
        event.preventDefault()
    };

    // sendMess =(event)=> {
        
    // };

    getValue =(event)=> {
        console.log(event.target.value);
        this.setState({messageContent: event.target.value});
    };

    render() {
        return(
            <div >
                <MessageList/> 
                <Message message={this.state.messageContent}/>
                <form onSubmit={this.submitForm} className="wrapper-appPosts">
                    <Input onChange={this.getValue} type="text" placeholder="users name" />
                    {/* name="userName" */}
                    {/* <Input type="text" placeholder="message" name="message"/> */}
                    <Input type="submit" value="send"/>

                    {/* <Button type="submit" buttonValue="send" name="submit"/> */}
                </form>
            </div>
        );
    }   
}