import React from 'react'
import LeftProfileSide from '../components/LeftProfileSide'
import PostSide from '../components/PostSide'
import ProfileCard from '../components/ProfileCard'
import RightSide from '../components/RightSide'

const ProfilePage = () => {
  
  return (
    <div className='relative profilePage'>
        <LeftProfileSide />
        <div className='flex flex-col gap-[.8rem]'>
            <ProfileCard isProfilePage='true' />
            <PostSide />
            
        </div>
        <RightSide />
    </div>
  )
}

export default ProfilePage