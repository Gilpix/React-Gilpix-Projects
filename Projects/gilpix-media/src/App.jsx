import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedtab, setselectedtab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          slectedTab={selectedtab}
          setselectedtab={setselectedtab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedtab == "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
