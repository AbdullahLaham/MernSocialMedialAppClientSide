import React, { useRef, useState } from 'react'
import profile from '../img/img1.png'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            })
        }
    }
  return (
    <div className='flex flex-col gap-[1rem] bg-[#ffffff9f] rounded-[1rem] '>
        <div className='flex gap-[1rem] w-[95%] m-[.5rem]'>
            <img src={profile} alt='profileImage' className='w-[3rem] h-[3rem] rounded-full' />
            <div className='w-[100%]'>
                <input type={'text'} className='bg-[#e7e7e7] rounded-[10px] p-[10px] text-[17px] border-none outline-none w-[100%] ' placeholder='Whats happpening ' />
            </div>
        </div>
        <div className='flex justify-around '>
            <label for='imageloader' className='text-[#4CB256] flex items-center justify-center hover:cursor-pointer py-[5px] px-[10px] rounded-[10px]  '>
                <UilScenery />
                Photo
            </label>
            <div className='text-[#4A4EB7] flex items-center justify-center hover:cursor-pointer py-[5px] px-[10px] rounded-[10px]  '>
                <UilPlayCircle />
                Video
            </div>
            <div className='text-[#EF5757] flex items-center justify-center hover:cursor-pointer py-[5px] px-[10px] rounded-[10px]  '>
                <UilLocationPoint />
                Location
            </div>
            <div className='text-[#E1AE4A] flex items-center justify-center hover:cursor-pointer py-[5px] px-[10px] rounded-[10px]  '>
                <UilSchedule />
                Scheduak
            </div>
            <button className='button'>
                Share
            </button>
            <div>
                <input id='imageloader' type={'file'} name='myImage' ref={imageRef} className='hidden' onChange={(e) => handleImageChange(e)} />
            </div>
            {/* <div className='option'>
                <UilTimes />
            </div> */}

        </div>

        {image?.image && 
        <div className='previewImage w-[100%] relative'>
            <UilTimes className='absolute top-[1rem] left-[1rem] cursor-pointer' onClick={() => setImage({})} />
            <img src={image?.image} className='w-[70%] m-auto object-cover rounded-[.5rem] ' />
        </div>}
    </div>
  )
}

export default PostShare