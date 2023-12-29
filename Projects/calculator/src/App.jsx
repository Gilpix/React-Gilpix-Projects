import "./App.css";
import CalculatorKeyPad from "./components/CalculatorKeyPad";
import Container from "./components/Container";
import Display from "./components/Display";
import Header from "./components/Header";
import { useState } from "react";

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
      { id: 10, value: "*" },
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

  //use useState to keep track of calculator inputs to ealuate the calculation
  const [calVal, setCalVal] = useState("");

  //on click Handler function - passed to children component('CalculatorKeyPad')
  //to get the value of button clicked on calculator
  let onClickHandler = (value) => {
    if (value === "C") {
      setCalVal("");
    } else if (value === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newCalVal1 = calVal + value;
      setCalVal(newCalVal1);
    }
  };

  return (
    <center>
      <Header heading="Calculator"></Header>
      <Container>
        <Display displayValue={calVal}></Display>
        <CalculatorKeyPad
          buttonsList={buttonsList}
          onClickHandler={(value) => onClickHandler(value)}
        ></CalculatorKeyPad>
      </Container>
    </center>
  );
}

export default App;
