import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber-Logo" />

      <form>
        <input type="emal" placeholder="Your email" />
        <input type="password" placeholder="Your password" />

        <button type="submit">SignIn</button>

        <Link to="/register">SignUp for a free account</Link>
      </form>
    </>
  );
}
