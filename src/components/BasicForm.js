import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredFirstName, 
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError, 
    valueChangedHandler: firstNameChangedHandler, 
    inputBlurHandler: firstNameBlurHanlder,
    reset: resetFirstNameInput
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName, 
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError, 
    valueChangedHandler: lastNameChangedHandler, 
    inputBlurHandler: lastNameBlurHanlder,
    reset: resetLastNameInput
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangedHandler: emailChangedHandler, 
    inputBlurHandler: emailBlurHanlder,
    reset: resetEmailInput
  } = useInput(isEmail);

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>

        <div className={firstNameInputClasses}>
          <label htmlFor='first name'>First Name</label>
          <input 
            type='text' 
            id='first-name' 
            onChange={firstNameChangedHandler} 
            onBlur={firstNameBlurHanlder} 
            value={enteredFirstName} />
        </div>
        {firstNameInputHasError && <p className="error-text">First name must not be empty.</p>}

        <div className={lastNameInputClasses}>
          <label htmlFor='last name'>Last Name</label>
          <input 
            type='text' 
            id='last-name' 
            onChange={lastNameChangedHandler} 
            onBlur={lastNameBlurHanlder} 
            value={enteredLastName} />
        </div>
        {lastNameInputHasError && <p className="error-text">Last name must not be empty.</p>}

      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
            type='email' 
            id='email-name' 
            onChange={emailChangedHandler} 
            onBlur={emailBlurHanlder} 
            value={enteredEmail} />
      </div>
      {emailInputHasError && <p className="error-text">Email must include @.</p>}

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
