import React, { useEffect, useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../actions/shareActions';
import { updateUser } from '../actions/UserActions';

function ProfileModal({modalOpened, setModalOpened, data}) {

  const [opened, { open, close }] = useDisclosure(false);
  const {password, ...other} = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [counter, setCounter] = useState(0);
  // dispatch
  const dispatch = useDispatch();
  const params = useParams();

  const {id: userId} = params;
  const theme = useMantineTheme();
  const {authData: user} = useSelector((state) => state?.authReducer);
  // input handleChange
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    
  }
  // uploadImages
  const uploadImages = (e) => {
    const img = e.target.files[0];

    if (e.target.name == 'profilePicture') {
      setProfileImage(img);
      const data = new FormData();
      const filename = Date.now() + img?.name;
      data.append("name", filename); // save as key and value
      data.append('file', img);
      setFormData({...formData, profilePicture: filename});
      try {
        dispatch(uploadImage(data));
      } catch (error) {
          console.log(error)
      }
    } else {
      setCoverImage(img);
      const data = new FormData();
      const filename = Date.now() + img?.name;
      data.append("name", filename); // save as key and value
      data.append('file', img);
      setFormData({...formData, coverPicture: filename});
      try {
        dispatch(uploadImage(data));
      } catch (error) {
          console.log(error)
      }
    }
  } 


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser(userId, formData));
    setModalOpened(false);
    
  }
  useEffect(() => {
    setCounter(0)
  }, [])


  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size={'55%'}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
            
        <form className='infoForm bg-[#ffffffb0] p-[1rem] rounded-[1rem] flex flex-col justify-center items-center gap-[2rem]' onSubmit={handleSubmit}>
            <h3 className='font-bold text-2xl'>Your Info</h3>
            <div className='w-[100%] flex flex-col justify-center items-center gap-[.8rem]'>
                <div className='w-[100%] flex gap-[.5rem] items-center justify-center'>
                    <input type={'text'} placeholder='First Name' className=' p-[1rem] rounded-md bg-[#f3f3f3] border-none outline-none flex-1'  name='firstname'  onChange={handleChange} value={formData?.firstname}/>
                    <input type={'text'} placeholder='Last Name' className=' p-[1rem] rounded-md bg-[#f3f3f3] border-none outline-none flex-1'  name='lastname'  onChange={handleChange} value={formData?.lastname}/>
                </div>
                <div className='w-[100%]'>
                    <input type={'text'} placeholder='Works At' className='w-[100%] p-[1rem] rounded-md bg-[#f3f3f3] border-none outline-none flex-1' name='worksAt' onChange={handleChange}  value={formData?.worksAt}/>
                </div>
                <div className='w-[100%] flex gap-[.5rem] items-center justify-center'>
                    <input type={'text'} placeholder='Lives In' className='w-[50%] p-[1rem] rounded-md bg-[#f3f3f3] border-none outline-none flex-1' name='livesIn'  onChange={handleChange} value={formData?.livesIn}/>
                    <input type={'text'} placeholder='Country' className='w-[50%] p-[1rem] rounded-md bg-[#f3f3f3] border-none outline-none flex-1' name='country'  onChange={handleChange} value={formData?.country}/>
                </div>
                <div className='w-[100%]'>
                    <input type={'text'} placeholder='Relationship Status' className='w-[100%] p-[1rem] rounded-md bg-[#f3f3f3] border-none outline-none flex-1' name='relationship' onChange={handleChange} value={formData?.relationship} />
                </div>
                <div className='w-[100%] flex gap-[.5rem] items-center justify-center'>
                    <div className='flex items-center justify-between flex-1 '>
                        <p className='font-bold '>Profile Image</p>
                        <input type={'file'} placeholder='Lives In' className='w-[50%] p-[1rem] flex-1' name='profilePicture' onChange={uploadImages}/>
                    </div>
                    <div className='flex items-center justify-between flex-1 '>
                        <p className='font-bold '>Cover Image</p>
                        <input type={'file'} placeholder='Country' className='w-[50%] p-[1rem] flex-1' name='coverPicture' onChange={uploadImages}/>
                    </div>
                    
                    
                </div>
            </div>
            <button type='submit' className='button ml-[80%] h-[2.5rem]'>submit</button>
        </form>
      </Modal>
      
      
    </>
  );
}
export default ProfileModal;
