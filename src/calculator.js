import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const Clickbtn = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const Erase = () => {
    setInput('');
  };

  const Equal = () => {
    try {
      setInput(evaluateExpression(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const evaluateExpression = (expression) => {
    // Remove any characters that are not digits, operators, or parentheses
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    
    // Use a Function constructor to create a new function that returns the result of the expression
    return new Function(`return ${sanitizedExpression}`)();
  };

  return (
    <div className="calculator-container container">
      <div className="calculator-wrapper">
        <textarea
          className="textarea-wrapper"
          id="input-area"
          value={input}
          readOnly
        />
        <div className="btn-wrapper1 btn-wrapper">
          <button onClick={Erase}>C</button>
          <button onClick={() => Clickbtn("+/-")}>+/-</button>
          <button onClick={() => Clickbtn("%")}>%</button>
          <button onClick={() => Clickbtn("/")}>/</button>
        </div>
        <div className="btn-wrapper btn-wrapper2">
          <button onClick={() => Clickbtn("7")}>7</button>
          <button onClick={() => Clickbtn("8")}>8</button>
          <button onClick={() => Clickbtn("9")}>9</button>
          <button onClick={() => Clickbtn("*")}>x</button>
        </div>
        <div className="btn-wrapper btn-wrapper3">
          <button onClick={() => Clickbtn("4")}>4</button>
          <button onClick={() => Clickbtn("5")}>5</button>
          <button onClick={() => Clickbtn("6")}>6</button>
        </div>
        <div className="btn-wrapper btn-wrapper4">
          <button onClick={() => Clickbtn("1")}>1</button>
          <button onClick={() => Clickbtn("2")}>2</button>
          <button onClick={() => Clickbtn("3")}>3</button>
        </div>
        <div className="btn-wrapper btn-wrapper5">
          <button onClick={() => Clickbtn("-")}>-</button>
          <button onClick={() => Clickbtn("+")}>+</button>
          <button onClick={() => Clickbtn(".")}>.</button>
        </div>
        <div className="equal-wrapper">
          <button onClick={Equal}>=</button>
        </div>
        <div className="zero-wrapper">
          <button onClick={() => Clickbtn("0")}>0</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
