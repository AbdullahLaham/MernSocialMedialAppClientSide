import React, { useEffect, useRef, useState } from 'react'
import { addMessage, getMessages } from '../../api/MessageApi';
import { fetchUserData } from '../../api/UserApi';
import './ChatBox.css';
import {format} from 'timeago.js';
import InputEmoji from 'react-input-emoji';
const ChatBox = ({chat, currentUserId, setSendMessage, recieveMessage}) => {

  // fetching data for header
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();

    useEffect(() => {
       
        const getUserData = async () => {
          const userId = chat?.members?.find((id) => id !== currentUserId);
            try {
                const {data} = await fetchUserData(userId);
                setUserData(data);
                console.log(data, 'useree');
            } catch (error) {
                console.log(error);
            }
        }
        getUserData();
    }, [chat, currentUserId]);

    // fetching data for messages
    useEffect(() => {
      const userId = chat?.members?.find((id) => id !== currentUserId);
      const fetchMessages = async () => {
          try {
              const {data} = await getMessages(chat?._id);
              setMessages(data);
              console.log(data, 'messages');
          } catch (error) {
              console.log(error);
          }
      }
      if (chat != null) fetchMessages();
  }, [chat, currentUserId]);

  // recieve message from the socket server
  useEffect(() => {
    if (recieveMessage !== null && recieveMessage.chatId == chat?._id) {
      setMessages([...messages, recieveMessage]);
    }
  }, [recieveMessage])
  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  }

  // always scroll to last message
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth", })
  }, [messages])
  // handleSend the message

  const handleSend = async (e) => {
    e?.preventDefault();
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat?._id,
    }
    // send message to the database
    try {
      const {data} = await addMessage(message);
      setMessages([...messages, data])
      setNewMessage("");
    } catch(error) {
      console.log(error);
    }

    // send message to the socket server
    const recieverId = chat.members.find((id) => id !== currentUserId);
    setSendMessage({...message, recieverId});
  }
  return (
    <>
      <div className='ChatBox-container w-[100%] min-h-[85vh] ' >
        <div className='chat-header'>
          <div className='w-[100%] '>
            <div className='flex justify-start items-center gap-[1rem] w-[100%] relative p-[.4rem]'>
              <div className='ml-[.5rem]'>
                  <div className='online-dot'></div>
                  <img src={userData?.profilePicture ? 'http://localhost:5000/images/' + userData?.profilePicture : 'http://localhost:5000/images/' + 'defaultProfile.png'} alt='followerImage' className='w-[50px] h-[50px] rounded-full object-cover' />
              </div>
              <div className='name text-[.8rem] flex flex-col '>
                  <span className='font-semibold text-[1.1rem] '>{userData?.firstname} {userData?.lastname} </span>
                  <span>Online</span>
              </div>
            </div>
          </div>
        </div>

        <hr className='w-[85%] mx-auto border-[.1px] border-[#ececec]' />
        
          {/* chatBox Messages */}
        <div className='chat-body h-[100%] max-h-[68vh] overflow-y-scroll' ref={scroll}>
          {
            messages.map((message) => (
              <div className={message?.senderId === currentUserId ? "message own" : "message"} >
                <span>{message?.text}</span>
                <span>{format(message?.createdAt)}</span>
              </div>
            ))
          }

        </div>
        {/* chat input  */}
        <div className='chat-sender' >
          <div className='add-button'>+</div>
          <InputEmoji value={newMessage} onChange={handleChange} />
          <div className='send-button button' onClick={handleSend}>
            Send
          </div>

        </div>
      </div>
      
    </>

  )
}

export default ChatBox;