import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userChats } from '../../api/ChatApi';
import LogoSearch from '../../components/LogoSearch'
import NavIcons from '../../components/NavIcons';
import ChatBox from '../../components/ChatBox/ChatBox';
import Conversation from '../../components/Conversation'
import './Chat.css'
import { io } from 'socket.io-client';
const Chat = () => {
  // authData
  const {authData: user} = useSelector((state) => state?.authReducer);
  // dispatch
  const dispatch = useDispatch();
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);

  // socket
  const socket = useRef();

  useEffect(() => {
    socket.current = io('http://localhost:8800');
    socket.current.emit("new-user-add", user?._id);
    socket.current.on('get-users', (users) => {
      console.log('user', users)
      setOnlineUsers(users)
    })
  }, [user])

  useEffect(() => {
    const getChats = async () => {
      try {
        const {data} = await userChats(user?._id);
        setChats(data);
        setCurrentChat(data[0]);
        console.log(data, 'chats');
      } catch (error) {

      }
    }
    getChats();
  }, [user]);

  // send message to the socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage);
    }
  }, [sendMessage]);

  // recieve message from the the socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      setRecieveMessage(data);
    })
  }, []);
  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user?._id);
    const online = onlineUsers.find((user) => user?.userId === chatMember);
    return online ? true : false;
  }
  return (
    <div className='Chat'>
      {/* left side */}
        <div className='flex flex-col gap-[1rem]'>
          <LogoSearch />
          <div className='flex flex-col gap-[1rem] bg-[#f3f3f3] p-[1rem] h-auto min-h-[80vh] overflow-scroll rounded-[1rem]'>
            <h2>Chats</h2>
            <div className=''>
              {chats?.map((chat) => {
                return (
                  <div className='cursor-pointer' onClick={() => setCurrentChat(chat)}>
                    <Conversation data={chat} currentUserId={user?._id} online={checkOnlineStatus(chat)} />
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      {/* right side */}
      <div className='flex flex-col gap-[1rem] flex-1'>
          
          <div className='flex flex-col justify-end'>
            <div className='w-[20rem] mb-[.4rem]'  style={{alignSelf: 'flex-end', }}>
              <NavIcons />
            </div>
            {/* chat body */}
            <ChatBox setSendMessage={setSendMessage} chat={currentChat} currentUserId={user?._id} recieveMessage={recieveMessage} />
          </div>    
      </div>
    </div>
  )
}

export default Chat