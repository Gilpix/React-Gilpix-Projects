import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "./LoadingSpinner";

const PostList = ({ selectedTab, setSelectedTab }) => {
  const { postList } = useContext(PostListData);
  const { addInitialPosts } = useContext(PostListData);

  //to record Loading Spinner visibility
  const [loading, setLoading] = useState(false);

  //Initially we were using button to FETCH list of posts but with useEffect
  //we can call the fetch function at initial render of cmponent
  useEffect(() => {
    //Used to abort network request
    const controller = new AbortController();
    const signal = controller.signal;
    fetchPostList(signal);
    //CLEANUP METHOD - run when component is removed(user move to other component)
    return () => {
      controller.abort(); // abort the request
    };
  }, []);

  //Fetch function to get Post from dummyJson products API
  const fetchPostList = (signal) => {
    setLoading(true);
    fetch("https://dummyjson.com/products", { signal }) // Here signal is sent to use allow aborting network request when needed
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
        setLoading(false);
        addInitialPosts(posts);
      });
  };

  return (
    <div className="container my-5 pb-5" align="center">
      {loading && <LoadingSpinner></LoadingSpinner>}
      <div className="row">
        {!loading && postList.length == 0 && (
          <WelcomeMessage
            slectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            onGetPostList={fetchPostList}
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
