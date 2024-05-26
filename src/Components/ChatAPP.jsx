import React, { useState, useEffect } from 'react';

export default function ChatApp() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulate a subscription to new messages (e.g., from a websocket)
    const subscription = subscribeToNewMessages((newMessage) => {
//************ Zeer belangrijk (prevMessage): ************
      
      setMessages([...messages, newMessage]);
//**********************
    });

// ****** Zeer belangrijk: this is how you unsubscribe in react.js: *********
    return () => {
      // Cleanup the subscription when the component unmounts
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
        {console.log(messages)}
      <h1>Chat App</h1>
      <ul>
        {messages.map((message, index) => (
//Nooit index gebruiken als value voor de key:
          <li key={index}>{message}</li>
         
        ))}
      </ul>
    </div>
    
  );
}

// Simulate a subscription function
function subscribeToNewMessages(callback) {
  const timer = setInterval(() => {
    const newMessage = `New message at ${new Date().toLocaleTimeString()}`;
    callback(newMessage);
  }, 3000);

  return {
//Wanneer je setInterVal en setTimeout gebruikt, ALTIJD unbsubscriben!!!!!
    unsubscribe: () => {
      clearInterval(timer);
    },
  };
}
