import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { v4 as uuidv4 } from "uuid";

const PostList = ({ selectedTab, setSelectedTab }) => {
  const { postList } = useContext(PostListData);
  const { addInitialPosts } = useContext(PostListData);

  //Fetch function to get Post from dummyJson products API
  const handleOnGetPostList = () => {
    fetch("https://dummyjson.com/products")
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
        addInitialPosts(posts);
      });
  };
  return (
    <div className="container my-5 pb-5" align="center">
      <div className="row">
        {postList.length == 0 && (
          <WelcomeMessage
            slectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            onGetPostList={handleOnGetPostList}
          ></WelcomeMessage>
        )}
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
