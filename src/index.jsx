import './style.css'

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Input from './components/Input/Input.jsx'
import MessageList from './components/MessageList/MessageList.jsx';

class App extends Component {
    render() {
        return(
            <div>
                <MessageList/>
                <Input/>
            </div>
        );
    } 
}
ReactDom.render(<App/>, document.querySelector('#root'));