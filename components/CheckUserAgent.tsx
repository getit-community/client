import { updateUserAgent } from 'features/user';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const CheckUserAgent = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      const userAgent = window.navigator.userAgent;
      setIsMobile(userAgent.indexOf('Mobi') > -1);
    }

    dispatch(updateUserAgent({ isMobile }));
  }, [dispatch, isMobile]);

  return <></>;
};

export default CheckUserAgent;
