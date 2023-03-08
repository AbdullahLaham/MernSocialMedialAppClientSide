import React from 'react'
import PostSide from '../components/PostSide'
import ProfileSide from '../components/ProfileSide'
import RightSide from '../components/RightSide'

const HomePage = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <PostSide />
        <RightSide />
    </div>
  )
}

export default HomePage