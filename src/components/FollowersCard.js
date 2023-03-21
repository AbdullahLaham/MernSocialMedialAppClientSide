import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getAllUsers } from '../api/UserApi';
import {Followers} from '../data/FollowersData';

import User from './User'
const FollowersCard = () => {
    
  const [persons, setPersons] = useState([]);
  const {authData: user} = useSelector((state) => state?.authReducer); 


  useEffect(() => {

    const fetchPersons = async () => {
        const {data} = await getAllUsers();
        setPersons(data);
    }

    fetchPersons();
  }, []);


  return (
    <div className='w-[100%] rounded-[.7rem] lg:flex md:flex hidden flex-col items-start  text-[13px]  gap-[1rem] '>
        <h3>People you may know</h3>
        {
            persons.map((person, i) => person?._id !== user?._id && <User data={person} />)
        }
    </div>
  )
}

export default FollowersCard