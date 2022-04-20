import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import styled from 'styled-components';
import styles from './CourseInput.module.css';

// const FormContorl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.invalid ? 'red' : 'black'};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//   background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
//   /* Styled Components here allow us to get rid of .invalid style below */
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// /* &.invalid input {
//   border-color: red;
//   background-color: #ffd7d7;
// } */
// /* &.invalid label {
//   color: red;
// } */

// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) { 
      // Cut whitespace and check if length is 0; ie don't add blank items
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input 
          type="text" 
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
