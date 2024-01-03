import Post from "./Post";
import { useContext, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";

function postListChunksFun(list) {
  return list.reduce(
    (acc, item) => {
      if (acc[acc.length - 1].length >= 3) {
        return [...acc, [item]];
      }
      acc[acc.length - 1].push(item);
      return acc;
    },
    [[]]
  );
}

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div className="container my-5 pb-4" align="center">
      <div className="row">
        {postList.map((post) => {
          return <Post key={post.id} post={post}></Post>;
        })}
      </div>
    </div>

    // <div className="container mt-5" align="center">
    //   <div className="row">
    //     {postList.map((postsSet) => {
    //       <h1>HHHHHHH</h1>;
    //       // <div className="row">
    //       //   {postsSet.map((post) => {
    //       //     return <Post key={post.id} post={post}></Post>;
    //       //   })}
    //       // </div>;
    //     })}
    //   </div>
    // </div>
  );
};

export default PostList;
