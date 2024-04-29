import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { ChainlitAPI } from '@chainlit/react-client';
import ChatSession from './Components/ChatSession';
import ChatMessages from './Components/ChatMessages';
import ChatInteract from './Components/ChatInteract';
import ChatData from './Components/ChatData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <App />
    <ChatSession />
    <ChatMessages />
    <ChatInteract /> 
    <ChatData />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
