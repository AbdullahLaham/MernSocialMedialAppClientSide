import React from 'react'
import Logo from '../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className=' gap-[.75rem] hidden lg:flex'>
        <img src={Logo} alt='userImage' />
        <div className='Search flex bg-[var(--inputColor)] rounded-[10px] p-[5px] '  >
            <input type={'text'} className='bg-transparent border-none outline-none ' placeholder='#Explore' />
            <div className='s-icon flex items-center justify-center bg-gradient-to-r from-[#f99827] to-[#f95f35] text-white rounded-[5px] p-[4px] cursor-pointer  '>
                <UilSearch className='text-[.8rem]' />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch