import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/images/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required("Name can't be empty"),
  email: Yup.string()
    .email('Insert a valid email')
    .required("Email can't be empty"),
  password: Yup.string()
    .min(6, 'Password must be longer than 6 characters')
    .required("Password can't be empty"),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber-Logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="emal" placeholder="Your email" />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">SignUn</button>

        <Link to="/">Have an account? SingIn</Link>
      </Form>
    </>
  );
}
