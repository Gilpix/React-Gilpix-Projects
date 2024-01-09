import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  //Now postList will be used from Loader
  // const { postList, loading, fetchPostListFromServer } = useContext(
  //   PostListData
  // );
  const { loading, fetchPostListFromServer } = useContext(PostListData);

  //Accessing postlistFrom Loader which and is available before component creates
  const postList = useLoaderData();

  return (
    <div className="container my-5 pb-5" align="center">
      {loading && <LoadingSpinner></LoadingSpinner>}
      <div className="row">
        {!loading && postList.length == 0 && (
          <WelcomeMessage
            onGetPostList={fetchPostListFromServer}
          ></WelcomeMessage>
        )}
        {!loading &&
          postList.map((post) => {
            return <Post key={post.id} post={post}></Post>;
          })}
      </div>
    </div>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/products") // Here signal is sent to use allow aborting network request when needed
    .then((res) => res.json())
    .then((res) => {
      let posts = res.products.map((post) => {
        return {
          id: uuidv4(),
          title: post.title,
          description: post.description,
          imageUrl: post.thumbnail,
          reactions: Math.floor(Math.random() * 20 + 0),
          userId: "user1",
          tags: [post.brand, post.category],
        };
      });
      return posts;
    });
};

export default PostList;
