import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  function handleSubmit(data) {}
  return (
    <Container>
      <Form initialData={profile} onSubmit>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Your email address" />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Your current password"
        />
        <Input type="password" name="password" placeholder="New Password" />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Confirm new password"
        />

        <button type="submit">Update Profile</button>
      </Form>

      <button type="button">Exit GoBarber</button>
    </Container>
  );
}
