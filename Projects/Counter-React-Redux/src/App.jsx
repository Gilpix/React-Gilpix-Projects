import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import CounterPrivacy from "./components/CounterPrivacy";

function App() {
  const counterPrivacy = useSelector((state) => state.privacy);

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {counterPrivacy ? <CounterPrivacy /> : <DisplayCounter />}
            <Controls></Controls>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
