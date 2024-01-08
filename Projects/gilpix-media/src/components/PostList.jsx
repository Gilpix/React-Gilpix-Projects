import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "./LoadingSpinner";

const PostList = ({ selectedTab, setSelectedTab }) => {
  const { postList, loading, fetchPostListFromServer } = useContext(
    PostListData
  );

  return (
    <div className="container my-5 pb-5" align="center">
      {loading && <LoadingSpinner></LoadingSpinner>}
      <div className="row">
        {!loading && postList.length == 0 && (
          <WelcomeMessage
            slectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            onGetPostList={fetchPostListFromServer}
          ></WelcomeMessage>
        )}
        {!loading &&
          postList.map((post) => {
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

export default PostList;
