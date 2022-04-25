import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
      value: enteredName, 
      isValid: enteredNameIsValid,
      hasError: nameInputHasError, 
      valueChangedHandler: nameChangedHandler, 
      inputBlurHandler: nameBlurHanlder,
      reset: resetNameInput
    } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangedHandler: emailChangedHanlder,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.includes('@') && value.length > 3);

  // const [enteredName, setEnteredName] = useState('');
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // Name validation
  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // Email validation
  // const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@') && enteredEmail.length > 3;
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let emailError = <p>Email must be formatted as (email@test.com).test</p>
  if (enteredEmail.length <= 3) {
    emailError = <p>Email must be longer than 3 characters</p>
  }

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouched(true);
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);    
  // }

  // const emailInputBlurHandler = () => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    // setEnteredEmail('');
    // setEnteredEmailTouched(false);
  };


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Name */}
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name:</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangedHandler} 
          onBlur={nameBlurHanlder} 
          value={enteredName}
        />

      </div>
      {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      {/* Email */}
      <div className={emailInputClasses}>
        <label htmlFor='name'>Email Address:</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangedHanlder} 
          onBlur={emailBlurHandler} 
          value={enteredEmail}
        />

      </div>
      {emailInputHasError && <p className="error-text">{emailError}</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
