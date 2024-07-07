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
      const result = evaluateExpression(input);
      if (isNaN(result)) {
        setInput('');
      } else {
        setInput(result.toString());
      }
    } catch (error) {
      setInput('');
    }
  };

  const evaluateExpression = (expression) => {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    return parseExpression(sanitizedExpression);
  };

  const parseExpression = (expression) => {
    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => {
        if (b === 0) {
          throw new Error('Division by zero');
        }
        return a / b;
      },
    };

    const compute = (tokens) => {
      let stack = [];
      let currentNumber = '';
      let currentOperator = '+';

      for (let i = 0; i <= tokens.length; i++) {
        const char = tokens[i] || ' ';
        if (!isNaN(char) && char !== ' ') {
          currentNumber += char;
        } else if (char in operators || char === ' ' || i === tokens.length) {
          if (currentNumber !== '') {
            const num = parseFloat(currentNumber);
            switch (currentOperator) {
              case '+':
                stack.push(num);
                break;
              case '-':
                stack.push(-num);
                break;
              case '*':
                stack.push(stack.pop() * num);
                break;
              case '/':
                stack.push(stack.pop() / num);
                break;
              default:
                break;
            }
            currentNumber = '';
          }
          if (char !== ' ') {
            currentOperator = char;
          }
        }
      }

      return stack.reduce((acc, num) => acc + num, 0);
    };

    const tokens = expression.split(/([+\-*/])/);
    return compute(tokens);
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
