import React, { useState } from 'react';
import './Quiz.css';
import { data } from '../../Assets/data';

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [selected, setSelected] = useState(null); // track selected option

  const checkAns = (ans) => {
    setSelected(ans); // store selected option
  };

  const nextQuestion = () => {
    setIndex(index + 1);
    setSelected(null); // reset selection for next question
  };

  return (
    <div className='main-container'>
      <div className='container'>
        <h1>Quiz Application</h1>
        <hr />
        <h2>{index + 1}. {data[index].question}</h2>
        <ul>
          <li
            onClick={() => checkAns(1)}
            className={
              selected === 1
                ? data[index].ans === 1
                  ? 'correct'
                  : 'wrong'
                : ''
            }
          >
            {data[index].option1}
          </li>
          <li
            onClick={() => checkAns(2)}
            className={
              selected === 2
                ? data[index].ans === 2
                  ? 'correct'
                  : 'wrong'
                : ''
            }
          >
            {data[index].option2}
          </li>
          <li
            onClick={() => checkAns(3)}
            className={
              selected === 3
                ? data[index].ans === 3
                  ? 'correct'
                  : 'wrong'
                : ''
            }
          >
            {data[index].option3}
          </li>
          <li
            onClick={() => checkAns(4)}
            className={
              selected === 4
                ? data[index].ans === 4
                  ? 'correct'
                  : 'wrong'
                : ''
            }
          >
            {data[index].option4}
          </li>
        </ul>
        <div className="main-button">
          <button onClick={nextQuestion} disabled={index === data.length - 1}>
            Next
          </button>
        </div>
        <div className='index'>
          {index + 1} of {data.length} Questions
        </div>
      </div>
    </div>
  );
};

export default Quiz;
