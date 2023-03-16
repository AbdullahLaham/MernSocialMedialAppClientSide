import React from "react";

import Home from "../img/home.png";
import Noti from "../img/noti.png";
import Comment from "../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";

const NavIcons = () => {
  // navigate
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
        <Link to='../home'>
          <img className='w-[1.5rem] '  src={Home} alt='navicon' />
        </Link>
        <UilSetting className='text-[1.5rem] '  />
        <img  className='w-[1.5rem] ' src={Noti} alt="" />
        <Link to="../chat">
            <img  className='w-[1.5rem] ' src={Comment} alt="" />
        </Link>
    </div>
  )
}

export default NavIcons