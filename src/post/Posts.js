import React from "react";
import PostItem from "./PostItem";
import { useDispatch } from "react-redux";
import { getPosts, useSelector } from "./postSlice";
const Posts = ({ Posts }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.posts);
  return (
    <div>
      <button onClick={() => dispatch(getPosts())}></button>
      <PostItem />
    </div>
  );
};

export default Posts;
