import React from 'react'
import Comment from '../img/comment.png';
import Share from '../img/share.png';
import Heart from '../img/like.png';
import NotLike from '../img/notlike.png'
const Post = ({data}) => {
  return (
    <div className='flex flex-col p-[1rem] rounded-[1rem] gap-[1rem]'>
        <img className='w-[100%] max-h-[20rem] object-cover rounded-[.5rem] ' src={data?.img} />
        <div className='flex items-start justify-start gap-[.5rem] '>
          <img src={data?.liked ? Heart : NotLike} />
          <img src={Comment} />
          <img src={Share} />
        </div>
        <span>{data?.likes}likes</span>
        <div className='detail flex items-center justify-start gap-[.5rem]'>
            <p><b>{data?.name}</b></p>
            <p>{data?.desc}</p>
        </div>
    </div>
  )
}

export default Post