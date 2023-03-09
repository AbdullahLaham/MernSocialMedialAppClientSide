import React from "react";

import Home from "../img/home.png";
import Noti from "../img/noti.png";
import Comment from "../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="flex items-center justify-between">
        <img className='w-[1.5rem] '  src={Home} alt='navicon' />
        <UilSetting className='text-[1.5rem] '  />
        <img  className='w-[1.5rem] ' src={Noti} alt="" />
        <Link to="../chat">
            <img  className='w-[1.5rem] ' src={Comment} alt="" />
        </Link>
    </div>
  )
}

export default NavIcons