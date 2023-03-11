import React from 'react';
import AccountCircleFill0 from 'public/static/icons/AccountCircleIcon/account_circle_FILL0.svg';
import AccountCircleFill1 from 'public/static/icons/AccountCircleIcon/account_circle_FILL1.svg';

interface AccountCircleIconProps {
  fill?: boolean;
}

const AccountCircleIcon = ({ fill = false }: AccountCircleIconProps) => {
  if (!fill) {
    return <AccountCircleFill0 />;
  }

  if (fill) {
    return <AccountCircleFill1 />;
  }

  return <></>;
};

export default AccountCircleIcon;
