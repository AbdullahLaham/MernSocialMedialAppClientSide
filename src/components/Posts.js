import React from 'react'
import { PostsData } from '../data/PostsData'
import Post from './Post'

const Posts = () => {
  return (
    <div className='flex flex-col gap-[1rem] '>
        {
            PostsData?.map((post, i) => {
                return (
                    <Post data={post} id={i} />
                )
            })
        }
    </div>
  )
}

export default Posts