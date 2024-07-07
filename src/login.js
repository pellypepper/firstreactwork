import React, { useEffect, useState } from 'react'; 
import validator from 'validator';

function Login() {

  const [password, setPassword] = useState('');
  const [input, setInput] = useState('');
  const [showAlert, setShowAlert] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
    validate(value);
  }

  const validate = (value) => { 
    if (validator.isStrongPassword(value, { 
        minLength: 8, minLowercase: 1, 
        minUppercase: 1, minNumbers: 1, minSymbols: 1 
    })) { 
        setErrorMessage('Is Strong Password'); 
    } else { 
        setErrorMessage('Is Not Strong Password'); 
    } 
  } 

  const submit = (event) => {
    event.preventDefault();
    if (input === showAlert) {
      const confirmed = window.confirm("Are you sure you want to continue?");
      if (confirmed) {
        // Proceed with your logic here if the user confirms
        // For example, you can navigate to a different page or perform some action
        alert("Login successful");
      } else {
        // Handle the case where the user cancels the confirmation
      }
    } else {
      // Handle the case where the input does not match the displayed text
      alert("Input does not match the displayed text. Please try again.");
    }
  }

  useEffect(() => {
    const generateAlert = () => {
      const newRandom = ["A", "B", "C", "Z", "Y", "X", "D", "E", "P", "F", "G", "H","L","K", "M", "O", "Q"];
      let result = "";
      for (let i = 0; i < 5; i++) {
        result += newRandom[Math.floor(Math.random() * newRandom.length)];
      }
      return result;
    };

    // Call generateAlert and set the state
    setShowAlert(generateAlert());
  }, []);

  return (
    <div className='login-container container'> 
      <form className="login-wrapper" onSubmit={submit}>
        <h1>Login Here</h1>

        <label>Username</label>
        <input type="text" required></input>
        <label>Password</label>
        <input placeholder='minimum of 8 characters' onChange={handlePassword} type="password" required></input>
        {errorMessage && (
          <span style={{ 
            fontWeight: 'bold', 
            color: 'red',
          }}>
            {errorMessage}
          </span>
        )}
        <p>{password}</p>

        <div className='robotcheck-wrapper'>
          <p>We need to confirm if you are not a robot</p>
          <h2>{showAlert}</h2>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type='text'
            placeholder='Type in the correct alphabet displayed above'
            required
          />
        </div>
        <button type="submit">Submit</button>

        <p>Forgot Password? <span>Click here</span></p>
      </form>
    </div>
  );
}

export default Login;
