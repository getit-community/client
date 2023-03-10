import { updateUserAgent } from 'features/user';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useCheckUserAgent = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      const userAgent = window.navigator.userAgent;
      setIsMobile(userAgent.indexOf('Mobi') > -1);
    }

    dispatch(updateUserAgent({ isMobile }));
  }, [dispatch, isMobile]);

  return null;
};

export default useCheckUserAgent;
