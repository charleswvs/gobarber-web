import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required("Email can't be empty"),
  password: Yup.string().required("Password can't be empty"),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber-Logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="emal" placeholder="Your email" />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">SignIn</button>

        <Link to="/register">SignUp for a free account</Link>
      </Form>
    </>
  );
}
