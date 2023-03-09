import React from 'react';
import Cover from '../img/cover.jpg';
import Profile from '../img/img1.png';
const ProfileCard = ({isProfilePage}) => {

  return (
    <div className='rounded-[1.5rem] flex flex-col relative gap-[1rem] overflow-x-clip bg-[#ffffff85]'>
        <div className='relative flex flex-col items-center justify-center'>
            <img src={Cover} alt='' className='w-[100%] h-[100%]' />
            <img src={Profile} alt='' className='absolute -bottom-[2.8rem] transition-all duration-100 hover:-bottom-[2rem] w-[6rem] rounded-full imageShadow ' />
        </div>
        <div className='flex flex-col items-center mt-[3rem]'>
            <p className='font-bold '>
                Abdullah AL-Lahham
            </p>
            <p>Front End Developer</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-[.75rem] '>
            <hr className='w-[85%] border border-[#cfcdcd] ' />
            <div className='w-[80%] mx-auto justify-around  flex items-center gap-[1rem] '>
                <div className='follow flex flex-col items-center gap-[.2rem] justify-center '>
                    <p className='font-bold '>9,890</p>
                    <p className='text-[#363942] text-[13px] '>Followings</p>
                </div>
                <div className='vl h-[150%] w-[1px] border border-[#cfcdcd]'></div>
                <div className='follow flex flex-col items-center  gap-[.2rem] justify-center'>
                    <p className='font-bold '>1</p>
                    <p className='text-[#363942] text-[13px] '>Followers</p>
                </div>
                
                {isProfilePage && 
                    (
                        <>
                            <div className='vl h-[150%] w-[1px] border border-[#cfcdcd]'></div>
                            <div className='follow flex flex-col items-center  gap-[.2rem] justify-center'>
                                <p className='font-bold '>3</p>
                                <p className='text-[#363942] text-[13px] '>Posts</p>
                            </div>
                        </>
                    )
                }
            </div>
            <hr className='w-[85%] border border-[border] ' />
        </div>
       {!isProfilePage && <p className='font-bold text-orange-500 flex mb-[1rem] cursor-pointer items-center text-center justify-center'>
            My Profile
        </p>}
    </div>
  )
}

export default ProfileCard