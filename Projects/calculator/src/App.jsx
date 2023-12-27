import "./App.css";
import CalculatorKeyPad from "./components/CalculatorKeyPad";
import Display from "./components/Display";
import Header from "./components/Header";

function App() {
  let buttonsList = [
    [
      { id: 1, value: "C" },
      { id: 2, value: "1" },
      { id: 3, value: "2" },
    ],
    [
      { id: 4, value: "+" },
      { id: 5, value: "3" },
      { id: 6, value: "4" },
    ],
    [
      { id: 7, value: "-" },
      { id: 8, value: "5" },
      { id: 9, value: "6" },
    ],
    [
      { id: 10, value: "x" },
      { id: 11, value: "7" },
      { id: 12, value: "8" },
    ],
    [
      { id: 13, value: "/" },
      { id: 14, value: "9" },
      { id: 15, value: "0" },
    ],
    [
      { id: 16, value: "=" },
      { id: 17, value: "." },
    ],
  ];

  return (
    <center>
      <Header heading="Calculator"></Header>
      <div className="calculator">
        <Display></Display>
        <CalculatorKeyPad buttonsList={buttonsList}></CalculatorKeyPad>
      </div>
    </center>
  );
}

export default App;
