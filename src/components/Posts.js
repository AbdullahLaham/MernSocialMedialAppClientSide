import React from 'react'
import { PostsData } from '../data/PostsData'
import Post from './Post'

const Posts = () => {
  return (
    <div className=''>
        {
            PostsData?.map((post, id) => {
                return (
                    <Post />
                )
            })
        }
    </div>
  )
}

export default Posts