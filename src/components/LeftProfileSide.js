import React from 'react'
import FollowersCard from './FollowersCard'
import InfoCard from './InfoCard'
import LogoSearch from './LogoSearch'

const LeftProfileSide = () => {
  return (
    <div>
        <LogoSearch />
        <InfoCard />
        <FollowersCard />
    </div>
  )
}

export default LeftProfileSide