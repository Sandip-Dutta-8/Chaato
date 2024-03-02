import React, { useContext } from 'react'
import Messages from './Messages';
import Input from './Input';
import Add from '../assets/add.png';
import Cam from '../assets/cam.png';
import More from '../assets/more.png';
import { ChatContext } from '../context/ChatContext';


function Chat() {

  const {data} = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat