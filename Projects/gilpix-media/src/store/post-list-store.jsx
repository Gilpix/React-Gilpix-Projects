import { createContext, useReducer } from "react";

const initialPost = [
  {
    id: "1",
    title: "Happy New Yaer",
    description: "Hello welcome to the the year 2024",
    imageSrc:
      "https://t4.ftcdn.net/jpg/06/29/87/79/240_F_629877971_BkE3j0UaDG1d0iGTurYTpDcY0OH4GWHm.jpg",
    reactions: 2,
    userId: "11",
    tags: ["celebration", "2024"],
  },
  {
    id: "2",
    title: "Going To Goa",
    description: "After 5 years, I am again visiting GOA for vaccations",
    imageSrc:
      "https://t3.ftcdn.net/jpg/02/70/04/84/240_F_270048422_EeOeFgmqMRGxHF4KszqzG7lga86pBIbG.jpg",
    reactions: 9,
    userId: "112",
    tags: ["vaccation", "enjoy"],
  },
];

const createPost = () => {};
const deletePost = () => {};

export const PostList = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  // if(action.payload.type=="NEW_POST"){}
  // else if(action.payload.type=="NEW_POST"){}
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, initialPost);

  return (
    <PostList.Provider
      value={{
        postList,
        createPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
