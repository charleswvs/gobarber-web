import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/images/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber-Logo" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="emal" placeholder="Your email" />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">SignIn</button>

        <Link to="/register">SignUp for a free account</Link>
      </Form>
    </>
  );
}
