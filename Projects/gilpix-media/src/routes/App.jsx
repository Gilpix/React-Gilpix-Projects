import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  // const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
        // slectedTab={selectedTab}
        // setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          {/* {selectedTab == "Home" ? (
            <PostList
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            ></PostList>
          ) : (
            <CreatePost></CreatePost>
          )} */}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
