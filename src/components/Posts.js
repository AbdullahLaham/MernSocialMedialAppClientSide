import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTimeLinePosts } from '../actions/postAction'
import { PostsData } from '../data/PostsData'
import Post from './Post'
import Spinner from './Spinner'

const Posts = () => {
  const dispatch = useDispatch();
  const {authData} = useSelector((state) => state?.authReducer);
  let {posts, loading} = useSelector((state) => state?.postReducer);
  // get id from the params
  const params = useParams();
  // console.log
  useEffect(() => {
    dispatch(getTimeLinePosts(authData?._id));
  } , []);
   if (params?.id) posts = posts.filter((post) => post?.userId == params?.id);
  return (
    <div className='flex flex-col gap-[1rem] '>
        { !loading ? posts ?  <div>
          {
            posts?.map((post, i) => {
              return (
                <Post data={post} id={i} />
              )
            })
          }
        </div> : "No Posts..." : <Spinner />}

    </div>
  )
}

export default Posts;