import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class ChatBox extends Component {
  render(){
    const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ];
    return(
      <div>  <ChatBot steps={steps} /></div>
    )
  }
};

export default ChatBox;
