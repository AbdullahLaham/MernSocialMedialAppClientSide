import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../api/UserApi';
import '../pages/ChatPage/Chat.css'
const Conversation = ({data, currentUserId, online}) => {
    
    const [userData, setUserData] = useState(null);
    console.log('data', data);


    useEffect(() => {
        const userId = data?.members?.find((id) => id !== currentUserId);
        const getUserData = async () => {
            try {
                const {data} = await fetchUserData(userId);
                setUserData(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getUserData();
    }, [data, currentUserId]);
    

  return (
    <>
        <div className='conversation-cont flex justify-start gap-[2rem] items-center w-[100%] hover:bg-[#e2e2e2] p-[.7rem] rounded-lg'>
            <div className=''>
                {online ? <div className='online-dot'></div> : ""}
                <img src={userData?.profilePicture ? 'http://localhost:5000/images/' + userData?.profilePicture : 'http://localhost:5000/images/' + 'defaultProfile.png'} alt='followerImage' className='userImage w-[50px] h-[50px] rounded-full object-cover' />
            </div>
            <div className='flex flex-col name text-[.8rem] userInfo'>
                <span className='font-semibold text-[1.1rem] '>{userData?.firstname} {userData?.lastname} </span>
                <span>{online ? "Online" : "Offline"}</span>
            </div>
        </div>
        <hr className='w-[85%] border-[.1px] border-[#ececec]' />
    </>
  )
}

export default Conversation;