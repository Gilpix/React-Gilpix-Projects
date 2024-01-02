import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div className="container mt-4">
      <div className="row">
        {postList.map((post) => {
          return <Post key={post.id} post={post}></Post>;
        })}
      </div>
    </div>
  );
};

export default PostList;
