import React, { useEffect, useState } from "react";
import ProfileModal from './ProfileModal'
import { UilPen } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from '../api/UserApi';
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  // dispatch
  const dispatch = useDispatch();
  const params = useParams();
  const {id: profileUserId} = params;

  const [profileUser, setProfileUser] = useState({});
  const { authData: user } = useSelector((state) => state?.authReducer);

  // handleLogOut function
  const handleLogOut = () => {
    dispatch({type: "LOG_OUT"});
  }
  useEffect(() => {

    const fetchProfileData = async () => {
      if (profileUserId == user?._id) {
        setProfileUser(user);
      } else {
        const profileUserData = await UserApi.fetchUserData(profileUserId);
        setProfileUser(profileUserData);

      }
    }
    fetchProfileData();

  }, [user]);

  return (
    <div className="InfoCard flex flex-col gap-[1.2rem] bg-[#ffffffa2] p-[1rem] rounded-[1rem] w-[100%] my-[.8rem]">
      <div className="infoHead flex items-center justify-between ">
        <h4 className="font-bold">Profile Info</h4>
        {
          user?._id === profileUserId ? (
            <>
              <UilPen
                width="2rem"
                height="1.2rem"
                onClick={() => setModalOpened(true)}
              />
              <ProfileModal data={user} modalOpened={modalOpened} setModalOpened={setModalOpened} />
            </>
          ): (
            <></>
          )
        }
      </div>

      <div>
      <div className="info">
        {/* */}
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      </div>

      <button className="button logout-button w-[7rem] h-[2rem] ml-[55%]" onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default InfoCard