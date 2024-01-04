import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
});

//Reducer Fuction to perform actions
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type == "NEW_POST") {
    newPostList = [
      ...currentPostList,
      {
        id: toString(parseInt(currentPostList) + 1),
        title: action.payload.title,
        description: action.payload.description,
        imageSrc: action.payload.imageSrc,
        reactions: 0,
        userId: action.payload.reactions,
        tags: action.payload.tags,
      },
    ];
  }
  if (action.type == "DELETE_POST") {
    newPostList = currentPostList.filter((post) => {
      if (post.id != action.payload.postId) return post;
    });
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, initialPost);

  const createPost = (
    title,
    description,
    imageSrc,
    reactions,
    userId,
    tags
  ) => {
    let addPostAction = {
      type: "NEW_POST",
      payload: { title, description, imageSrc, reactions, userId, tags },
    };
    dispatchPostList(addPostAction);
  };
  const deletePost = (postId) => {
    let deletePostAction = {
      type: "DELETE_POST",
      payload: { postId },
    };
    dispatchPostList(deletePostAction);
  };

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

const initialPost = [
  {
    id: "1",
    title: "Happy New Yaer",
    description:
      "Hello welcome to the the year 2024. Make this the best year of your life",
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
    tags: ["vaccation", "enjoy", "sea"],
  },
  {
    id: "3",
    title: "Longines Global Champions Tour",
    description:
      "We can’t hide our excitement any more…only one week to go!! 🇲🇽🇲🇽🇲🇽.🐎",
    imageSrc:
      "https://pbs.twimg.com/media/FQ4JytWVsAAYdW8?format=jpg&name=medium",
    reactions: 9,
    userId: "112",
    tags: ["vaccation", "enjoy", "sea"],
  },
  {
    id: "4",
    title: "Going To Goa",
    description: "After 5 years, I am again visiting GOA for vaccations",
    imageSrc:
      "https://t4.ftcdn.net/jpg/01/99/40/65/240_F_199406556_UZiQunnsxYidehW8yQvyEB1o2c1Zoez8.jpg",
    reactions: 9,
    userId: "112",
    tags: ["vaccation", "enjoy", "sea"],
  },
  {
    id: "5",
    title: "Going To Goa",
    description: "After 5 years, I am again visiting GOA for vaccations",
    imageSrc:
      "https://t3.ftcdn.net/jpg/02/78/28/90/240_F_278289051_WvLiTenCgNSTj9MVMpr0tRcrkhbh7YOU.jpg",
    reactions: 9,
    userId: "112",
    tags: ["vaccation", "enjoy", "sea"],
  },
  {
    id: "6",
    title: "Going To Goa",
    description: "After 5 years, I am again visiting GOA for vaccations",
    imageSrc:
      "https://t4.ftcdn.net/jpg/05/71/05/97/240_F_571059766_XkVSK5BOfHepjTfxmDYQa7LK6UAryR73.jpg",
    reactions: 9,
    userId: "112",
    tags: ["vaccation", "enjoy", "sea"],
  },
];

export default PostListProvider;
