import React, { useState } from 'react'
import Comment from '../img/comment.png';
import Share from '../img/share.png';
import Heart from '../img/like.png';
import NotLike from '../img/notlike.png'
import { useDispatch, useSelector } from 'react-redux';
import { getTimeLinePosts, likePost } from '../actions/postAction';
const Post = ({data}) => {

  const {authData} = useSelector((state) => state?.authReducer);
  console.log(data.likes)
  const [liked, setLiked] = useState(data?.likes.includes(authData?._id));
  const [likes, setLikes] = useState(data?.likes?.length);

  // dispatch
  const dispatch = useDispatch();

  const handleLike = () => {
    setLiked((prev) => !prev);
    dispatch(likePost(data?._id, authData?._id));

    liked ? setLikes(prev => prev - 1) : setLikes(prev => prev + 1);
    dispatch(getTimeLinePosts(authData?._id));
  }

  return (
    <div className='flex flex-col p-[1rem] rounded-[1rem] gap-[.2rem]'>
        <img className='max-w-[100%] max-h-[20rem]  rounded-[.5rem] ' src={data?.image ? 'http://localhost:5000/images/' + data?.image : ''} />
        <div className='detail flex items-center justify-start gap-[.1rem] text-[.9rem ] text-gray-600 font-semibold'>
            <p><b>{data?.name}</b></p>
            <p>{data?.desc}</p>
        </div>
        <div className='flex items-start justify-start gap-[.5rem] '>
          <img src={liked ? Heart : NotLike} onClick={handleLike} />
          <img src={Comment} />
          <img src={Share} />
        </div>
        <span className='text-gray-500 text-[14px] flex items-center gap-[.2rem]' >{likes}<p className=''>likes</p></span>
        
    </div>
  )
}


export default Post ;