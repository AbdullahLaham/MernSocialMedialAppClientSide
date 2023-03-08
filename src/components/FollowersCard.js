import React from 'react'
import {Followers} from '../data/FollowersData'
const FollowersCard = () => {
  return (
    <div className='w-[100%] rounded-[.7rem] flex flex-col items-start  text-[13px]  gap-[1rem] '>
        <h3>who is Following you</h3>
        {
            Followers.map((follower, i) => {
                return (
                    <div className='follower flex justify-between w-[100%] '>
                        <div className='flex gap-[10px]  items-center '>
                            <img src={follower?.img} alt='followerImage' className='w-[3.2rem] h-[3.2rem] rounded-full object-cover'  />
                            <div className='name flex flex-col  items-start '>
                                <p className='font-bold'>{follower?.name}</p>
                                <p className='text-[#666]'>{follower?.username}</p>
                            </div>

                        </div>
                        <button className='button'>
                            Follow
                        </button>

                    </div>
                )
            })
        }
    </div>
  )
}

export default FollowersCard