import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTimeLinePosts } from '../actions/postAction'
import { PostsData } from '../data/PostsData'
import Post from './Post'
import Spinner from './Spinner'

const Posts = () => {
  const dispatch = useDispatch();
  const {authData} = useSelector((state) => state?.authReducer);
  const {posts, loading} = useSelector((state) => state?.postReducer);

  // console.log
  useEffect(() => {
    dispatch(getTimeLinePosts(authData?._id));
  } , [])
  return (
    <div className='flex flex-col gap-[1rem] '>
        { !loading ? <div>
          {
            posts?.map((post, i) => {
              return (
                <Post data={post} id={i} />
              )
            })
          }
        </div> : <Spinner />}

    </div>
  )
}

export default Posts;