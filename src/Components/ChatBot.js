import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/chatBotTheme';

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
      <ThemeProvider theme={theme}>
        <ChatBot width={"50"} steps={steps} />
      </ThemeProvider>
    )
  }
};

export default ChatBox;
