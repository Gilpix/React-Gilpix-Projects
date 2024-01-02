import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div class="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
