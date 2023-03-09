import React from 'react';
import ResetPasswordController from 'models/resetPassword/ResetPasswordController';
import { withAuth } from 'lib/auth/withAuth';

const resetPassword = () => {
  return <ResetPasswordController />;
};

export default withAuth(resetPassword);
