import React from 'react'
import PostItem from './PostItem'
import { useDispatch } from 'react-redux'
import { getPosts } from './postSlice'
const Posts = ({Posts}) => {

    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(getPosts())}>

        </button>
        <PostItem/>
    </div>
  )
}

export default Posts