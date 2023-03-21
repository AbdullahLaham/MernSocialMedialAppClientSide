import React, { useRef, useState } from 'react'
import profile from '../img/img1.png'
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../actions/shareActions';
const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const desc = useRef();

    // authData
    const {authData: user} = useSelector((state) => state?.authReducer);
    // dispatch
    const dispatch = useDispatch();
    // loading
    const {loading} = useSelector((state) => state?.postReducer);
    // reset the input form
    const reset = () => {
        setImage(null);
        desc.current.value = '';
    }
    
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            console.log('omage', img);
            setImage(img);
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const newPost = {
            userId: user?._id,
            desc: desc?.current?.value,
        }

        if (image) {
            const data = new FormData();
            const filename = Date.now() + image?.name;
            console.log(Date.now())
            data.append("name", filename); // save as key and value
            data.append('file', image);
            newPost.image = filename;
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log(error)
            }
            console.log(newPost)
        }
        dispatch(uploadPost(newPost));
        reset();
    }

  return (
    <div className='flex flex-col gap-[1rem] bg-[#ffffff9f] rounded-[1rem] '>
        <div className='flex gap-[1rem] w-[95%] m-[.5rem]'>
            <img src={user?.profilePicture ? 'http://localhost:5000/images/' + user?.profilePicture : 'http://localhost:5000/images/' + 'defaultProfile.png'} alt='profileImage' className='w-[3rem] h-[3rem] rounded-full' />
            <div className='w-[100%]'>
                <input type={'text'} ref={desc} required className='bg-[#e7e7e7] rounded-[10px] p-[10px] text-[17px] border-none outline-none w-[100%] ' placeholder='Whats happpening ' />
            </div>
        </div>
        <div className='flex justify-around '>
            <label for='imageloader' className='text-[#4CB256] flex items-center justify-center hover:cursor-pointer py-[5px] px-[10px] rounded-[10px]  '>
                <UilScenery className='w-auto lg:w-[3rem]' />
                <p className='lg:block hidden'>Photo</p>
            </label>
            <div className='text-[#4A4EB7] flex items-center justify-center hover:cursor-pointer py-[5px] px-[10px] rounded-[10px]  '>
                <UilPlayCircle className='w-auto lg:w-[3rem]' />
                <p className='lg:block hidden'>Video</p>
            </div>
            <div className='text-[#EF5757] flex items-center justify-center hover:cursor-pointer py-[5px] px-[10px] rounded-[10px]  '>
                <UilLocationPoint className='w-auto lg:w-[3rem]' />
                <p className='lg:block hidden'>Location</p>
            </div>
            <div className='text-[#E1AE4A] flex items-center justify-center hover:cursor-pointer py-[5px] px-[10px] rounded-[10px]  '>
                <UilSchedule className='w-auto lg:w-[3rem]' />
                <p className='lg:block hidden'>Scheduak</p>
            </div>
            <button disabled={loading || (!desc?.current?.value && !image) } className='button' onClick={handleSubmit}>
                {loading ? "Uploading..." : "Share"}
            </button>
            <div>
                <input id='imageloader' type={'file'} name='myImage' ref={imageRef} className='hidden' onChange={(e) => handleImageChange(e)} />
            </div>
            {/* <div className='option'>
                <UilTimes />
            </div> */}

        </div>

        { image && 
        <div className='previewImage w-[100%] relative'>
            <UilTimes className='absolute top-[1rem] left-[1rem] cursor-pointer' onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} className='w-[70%] m-auto object-cover rounded-[.5rem] ' />
        </div> }
    </div>
  )
}

export default PostShare