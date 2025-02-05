import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';

function Game() {
  const [question, setQuestion] = useState("");
  const [hint, setHint] = useState("");
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(0);
  const intervalId = useRef(null);

  const Gameplan = useMemo(() => ({
    "first": {
      "question": "RUSSIA",
      "answer": "RUSSIA",
      "hint": "A Country in Europe"
    },
    "second": {
      "question": "RONALDO",
      "answer": "RONALDO",
      "hint": "A famous football player"
    },
    "third": {
      "question": "CUTLASS",
      "answer": "CUTLASS",
      "hint": "A Sharp object used for cutting things"
    },
    "fourth": {
      "question": "UNIVERSITY",
      "answer": "UNIVERSITY",
      "hint": "A Tertiary Institution where people study degree"
    },
    "fifth": {
      "question": "STATEMENT",
      "answer": "STATEMENT",
      "hint": "A declaration of something"
    },
    "sixth": {
      "question": "FEATHER",
      "answer": "FEATHER",
      "hint": "Hair like outer covering of birds"
    }
  }), []);

  const startTimer = useCallback((maxTime) => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    setTimer(maxTime);
    const id = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(id);
          alert(`Time off! The correct answer was: ${answer}`);
          return 0;
        }
      });
    }, 1000);
    intervalId.current = id;
  }, [answer]);

  const loadNewQuestion = useCallback(() => {
    const randomKey = Object.keys(Gameplan)[Math.floor(Math.random() * Object.keys(Gameplan).length)];
    const word = Gameplan[randomKey].question;
    let wordArray = word.split("");

    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    setQuestion(wordArray.join(""));
    setHint(Gameplan[randomKey].hint);
    setAnswer(Gameplan[randomKey].answer);
    setInput("");
    startTimer(30);
  }, [Gameplan, startTimer]);

  useEffect(() => {
    loadNewQuestion();
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    }; // Cleanup on component unmount
  }, [loadNewQuestion]);

  const handleSubmit = () => {
    if (input.toUpperCase() === answer) {
      window.confirm("Your Answer is correct");
      loadNewQuestion();
    } else {
      window.alert("Your Answer is incorrect");
    }
  };

  const handleReset = () => {
    loadNewQuestion();
  };

  return (
    <div className='game-container container'>
      <div className='game-wrapper'>
        <h2>Word Scramble</h2>
        <p className="line-wrapper"></p>
        <p className='answer-wrapper'>{question}</p>
        <span>Hint: {hint} </span>
        <span>Time left: <b>{timer}</b> </span>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter a Valid Word'
        ></textarea>
        <div className='btn-box'>
          <button onClick={handleReset} className="btn1">Refresh Word</button>
          <button onClick={handleSubmit}>Check Word</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
