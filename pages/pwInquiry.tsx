import React from 'react';
import PwInquiryController from 'models/pwInquiry/PwInquiryController';
import { withAuth } from 'lib/auth/withAuth';

const PwInquiry = () => {
  return <PwInquiryController />;
};

export default withAuth(PwInquiry);
