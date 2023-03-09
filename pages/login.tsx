import React from 'react';
import LoginController from 'models/login/LoginController';
import { withAuth } from 'lib/auth/withAuth';

const Login = () => {
  return <LoginController />;
};

export default withAuth(Login);
