import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extrackTime';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId == authUser._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-end";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt="Tailwind CSS chat bubble component" />
        </div>
      </div>

      <div className={`chat-bubble text-white pb-2 ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 item-center'>{formatedTime}</div>
    </div>
  )
}

export default Message
