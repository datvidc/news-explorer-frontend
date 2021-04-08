/* eslint-disable */
import React, { useState } from 'react';

import './Signin.css';

function Signin(props) {
  const type = props.signin ? 'signin' : 'signin__signup';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const emailWarn = 'what are you even doing ?';
  const passwordWarn = 'Are you even trying ?';
  const usernameWarn = 'Come on, seriously?';
  const title = type ? 'Sign in': 'Sign up';


  return (
    <div className={type}>
      <button type="button" aria-label="close" className="signin__close" />
      <h3>{title}</h3>
      <form className="signin__form">
        <label htmlFor="email">Email </label>
        <input className="signin__email" name="email" type="email"  autoComplete="on" placeholder="Enter email" minLength="7" required="" value="" />
        <p className="signin__error signing__email-warning">{emailWarn}</p>
        <label htmlFor="password">Password</label>
        <input className="signing__password" name="password" autoComplete="on" type="password" placeholder="Enter Password" minLength="4" required="" value="" />
        <p className="signin__error signin__password-warning"> {passwordWarn} </p>

        {!props.signin && (
          <>
            <label htmlFor="userName">Username</label>
            <input className="signing__username" name="username" type="text" placeholder="Enter your Username" minLength="2" required="" value="" />
            <p className="signin__error signin__username-warning"> {usernameWarn} </p>
          </>
        )}
        <button type="submit" className="signin__submit">Sign in</button>
        <p>or <a href="/">Sign up</a></p>
      </form>
    </div>
  );
}
export default Signin;
