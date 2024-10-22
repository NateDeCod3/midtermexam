import './App.css';
import { useState } from "react";

// Display Function
function Display({ display }) {
  return (
    <>{display}</>
  );
}

// Key Function
function Key({ label, clickHandler }) {
  return <button onClick={clickHandler}>{label}</button>;
}

// App Function
function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");

  // Buttons
  const keyOne = () => { setDisp("Being On Time"); };
  const keyTwo = () => { setDisp("Making An Effort"); };
  const keyThree = () => { setDisp("Being High Energy"); };
  const keyFour = () => { setDisp("Having A Positive Attitude"); };
  const keyFive = () => { setDisp("Being Passionate"); };
  const keySix = () => { setDisp("Using Good Body Language"); };
  const keySeven = () => { setDisp("Being Coachable"); };
  const keyEight = () => { setDisp("Doing A Little Extra"); };
  const keyNine = () => { setDisp("Being Prepared"); };
  const keyZero = () => { setDisp("Having A Strong Work Ethic"); };

  // Clear Click Handler
  const clrClickHandler = (e) => {
    e.preventDefault();
    setDisp("10 Things That Require Zero Talent");
  };

  // Name Click Handler
  const nameClickHandler = () => {
    setDisp("Nathaniel Manansala");
  };



  // ---RETURN---
  return (
    <div className="App">
      {/* Header */}
      <div className="Header">
        Nathaniel Manansala - IT3A
      </div>

      {/* Calculator */}
      <div className="Calc">
        {/* Calculator Display */}
        <div className="Disp">
          <Display display={disp} />
        </div>

        {/* Calculator Key Buttons */}
        <div className="Buttons">
          <Key label={1} clickHandler={keyOne} />
          <Key label={2} clickHandler={keyTwo} />
          <Key label={3} clickHandler={keyThree} />
          <Key label={4} clickHandler={keyFour} />
          <Key label={5} clickHandler={keyFive} />
          <Key label={6} clickHandler={keySix} />
          <Key label={7} clickHandler={keySeven} />
          <Key label={8} clickHandler={keyEight} />
          <Key label={9} clickHandler={keyNine} />
          <Key label={0} clickHandler={keyZero} />
          <Key label={"RESET"} clickHandler={clrClickHandler} className="Clear" />
        </div>

        {/* Name Button */}
        <div className="nameButton">
          <Key label={'Manansala'} clickHandler={nameClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;



// Number Click Handler
  // const numClickHandler = (e) => {
  //   e.preventDefault();
  //   const value = e.target.innerHTML;
  //   if (!isNum2) {
  //     if (num1 === null) {
  //       setNum1(value);
  //       setDisp(value);
  //     } else {
  //       setNum1(num1 + value);
  //       setDisp(num1 + value);
  //     }
  //   } else {
  //     if (num2 === null) {
  //       setNum2(value);
  //       setDisp(value);
  //     } else {
  //       setNum2(num2 + value);
  //       setDisp(num2 + value);
  //     }
  //   }
  // };

// // Operations Click Handler
//   const opClickHandler = (e) => {
//     e.preventDefault();
//     const value = e.target.innerHTML;
//     if (num1 !== null) {
//       setOp(value);
//       setIsNum2(true);
//       setDisp(value);
//     }
//   };

// // Equal Click Handler
//   const eqClickHandler = (e) => {
//     e.preventDefault();
//     if (num1 !== null && num2 !== null && op !== null) {
//       let result = null;
//       if (op === "+") {
//         result = parseInt(num1) + parseInt(num2);
//       } else if (op === "-") {
//         result = parseInt(num1) - parseInt(num2);
//       } else if (op === "*") {
//         result = parseInt(num1) * parseInt(num2);
//       } else if (op === "÷") {
//         result = parseInt(num1) / parseInt(num2);
//       } else {
//         result = "ERROR";
//     }
    
//     setDisp(result);
//     setNum1(result);
//     setNum2(null);
//     setOp(null);
//     setIsNum2(false);
//   }
// };