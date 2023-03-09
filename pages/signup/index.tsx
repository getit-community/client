import React from 'react';
import SignupController from 'models/signup/SignupController';
import { withAuth } from 'lib/auth/withAuth';

const Signup = () => {
  return <SignupController />;
};

export default withAuth(Signup);
