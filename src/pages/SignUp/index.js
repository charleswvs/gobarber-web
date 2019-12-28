import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber-Logo" />

      <form>
        <input placeholder="Full name" />
        <input type="emal" placeholder="Your email" />
        <input type="password" placeholder="Your password" />

        <button type="submit">SignUn</button>

        <Link to="/">Have an account? SingIn</Link>
      </form>
    </>
  );
}
