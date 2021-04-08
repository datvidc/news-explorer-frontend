/* eslint-disable */
import React, { useState } from 'react';

import './Signin.css';

function Signin(props) {
  const type = props.signin ? 'signin' : 'signin__signup';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setpasswordValid] = useState(false);
  const [usernameValid, setusernameValid] = useState(false);

  const [emailWarn, setEmailWarn] = useState('');
  const [passwordWarn, setpasswordWarn] = useState('');
  const [usernameWarn, setusernameWarn] = useState('');

  const title = type ? 'Sign in' : 'Sign up';
  const submitBtn = emailValid && passwordValid ? 'signin__buttonValid' : 'signin__submit';
  const btnType = emailValid && passwordValid ? 'submit' : 'button';

  const handleEmailChange = event => {
    event.preventDefault();
    if (event.target.closest('form').checkValidity()) {
      setEmailWarn('');
      setEmail(event.target.value);
      setEmailValid(true);
    } else {
      setEmailWarn('Invalid email address');
      setEmail(event.target.value);
    }
  }

  const handlePassChange = event => {
    event.preventDefault();
    if (event.target.closest('form').checkValidity()) {
      setpasswordWarn('');
      setPassword(event.target.value);
      setpasswordValid(true);
    } else {
      setpasswordWarn('invalid Password format');
      setPassword(event.target.value);
    }
  }

  const handleUserChange = event => {
    event.preventDefault();
    if (event.target.closest('form').checkValidity()) {
      setusernameWarn('');
      setUsername(event.target.value);
      setusernameValid(true);
    } else {
      setUsername(event.target.value);
      setusernameWarn('UserName is invalid')
    }
  }

  const handleSigninClick = event => {
    event.preventDefault();
    console.log("sneding");
    close();
  }

  return (
    <div className={type}>
      <button type="button" aria-label="close" className="signin__close" onClick={props.close} />
      <h3>{title}</h3>
      <form className="signin__form">
        <label htmlFor="email">Email </label>
        <input onChange={handleEmailChange} className="signin__email" name="email" type="email" autoComplete="on" placeholder="Enter email" minLength="7" required="" />
        <p className="signin__error signing__email-warning">{emailWarn}</p>
        <label htmlFor="password">Password</label>
        <input onChange={handlePassChange} className="signing__password" name="password" autoComplete="on" type="password" placeholder="Enter Password" minLength="4" required="" />
        <p className="signin__error signin__password-warning"> {passwordWarn} </p>

        {!props.signin && (
          <>
            <label htmlFor="userName">Username</label>
            <input onChange={handleUserChange} className="signing__username" name="username" type="text" placeholder="Enter your Username" minLength="2" required="" value="" />
            <p className="signin__error signin__username-warning"> {usernameWarn} </p>
          </>
        )}
        <button onClick={handleSigninClick} type={btnType} className={submitBtn}>Sign in</button>

      </form>
      <p className="signin__changetype">or <a href="/">Sign up</a></p>
    </div>
  );
}
export default Signin;
