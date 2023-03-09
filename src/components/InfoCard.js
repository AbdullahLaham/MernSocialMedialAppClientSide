import React, { useEffect, useState } from "react";
import { UilPen } from "@iconscout/react-unicons";
const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard flex flex-col gap-[1.2rem] bg-[#ffffffa2] p-[1rem] rounded-[1rem] w-[100%] my-[.8rem]">
      <div className="infoHead flex items-center justify-between ">
        <h4 className="font-bold">Profile Info</h4>
        <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
        />
      </div>

      <div>
      <div className="info">
        {/* */}
        <span>
          <b>Status </b>
        </span>
        {/* <span>{profileUser.relationship}</span> */}
        <span>In RelationShip</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        {/* <span>{profileUser.livesIn}</span> */}
        <span>Khanyounis</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        {/* <span>{profileUser.worksAt}</span> */}
        <span>Gaza Coding Space</span>
      </div>

      </div>

      <button className="button logout-button w-[7rem] h-[2rem] ml-[55%]" onClick={'handleLogOut'}>Log Out</button>
    </div>
  )
}

export default InfoCard