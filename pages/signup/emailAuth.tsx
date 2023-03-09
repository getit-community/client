import { withAuth } from 'lib/auth/withAuth';
import EmailAuthController from 'models/signup/emailAuth/EmailAuthController';
import React from 'react';

const EmailAuth = () => {
  return <EmailAuthController />;
};

export default withAuth(EmailAuth);
