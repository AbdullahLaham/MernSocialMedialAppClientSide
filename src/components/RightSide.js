import React, { useState } from "react";

import TrendCard from "./TrendCard";
import ShareModal from "./ShareModal";
import NavIcons from "./NavIcons";
const RightSide = () => {

  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide flex flex-col gap-[2rem] ">
      {/* Side Navbar */}

      <NavIcons />
      {/* TrendCard */}
      <TrendCard />

      {/* Share buttong */}
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default RightSide;