import React, { useState } from 'react'
import './chat.scss'
const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Raman</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, minus.</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Raman</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, minus.</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Raman</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, minus.</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Raman</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, minus.</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Raman</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, minus.</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Raman</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, minus.</p>
        </div>
        <div className="message">
          <img src="/user.png" alt="" />
          <span>Raman</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, minus.</p>
        </div>
      </div>
      {chat &&
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="/user.png" alt="" />
              Raman
            </div>
            <span className='close' onClick={() => setChat(false)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Chat