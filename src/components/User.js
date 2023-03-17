import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../actions/UserActions';

const User = ({data}) => {
  // dispatch
  const dispatch = useDispatch();

  const {authData: user} = useSelector((state) => state?.authReducer); 
  const [following, setFollowing] = useState(data.followers.includes(user?._id));
  const handleFollow = () => {
    dispatch(followUser(user?._id, data?._id));
    setFollowing(!following)
  }
  const handleUnFollow = () => {
    dispatch(unFollowUser(user?._id, data?._id));
    setFollowing(!following)
  }
  return (
    <div className='follower flex justify-between w-[100%] '>
        <div className='flex gap-[10px]  items-center '>
            <img src={data?.profilePicture ? 'http://localhost:5000/images/' + data?.profilePicture : 'http://localhost:5000/images/' + 'defaultProfile.png'} alt='followerImage' className='w-[3.2rem] h-[3.2rem] rounded-full object-cover'  />
            <div className='name flex flex-col  items-start '>
                <p className='font-bold'>{data?.firstname} {data?.lastname}</p>
                <p className='text-[#666]'>{data?.username}</p>
            </div>

        </div>
        <button className='button h-[2rem]' onClick={following ? handleUnFollow : handleFollow}>
            {following ? "unFollow" : "Follow"}
        </button>

    </div>
  )
}

export default User