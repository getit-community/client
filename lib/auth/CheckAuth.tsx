import { useEffect, useState } from 'react';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import { authAPI } from 'apis/auth';
import useCheckUserAgent from 'hooks/useCheckUserAgent';

interface CheckAuthProps {
  Component: NextComponentType;
  Props: any;
}

const CheckAuth = ({ Component, Props }: CheckAuthProps) => {
  const router = useRouter();
  useCheckUserAgent();

  useEffect(() => {
    (async () => {
      const response = await authAPI();

      // prevent infinite routing loop
      if (router.pathname === '/resetPassword') {
        return;
      }

      if (response?.success) {
        const path = router.pathname;

        if (response.message === 'needResetPassword') {
          return router.replace('/resetPassword');
        }

        switch (path) {
          case '/signup':
            router.replace('/');
            break;

          case '/signup/emailAuth':
            router.replace('/');
            break;

          case '/login':
            router.replace('/');
            break;

          case '/pwInquiry':
            router.replace('/');
            break;

          case '/resetPassword':
            router.replace('/');
            break;

          default:
            break;
        }
      } else {
      }
    })();
  }, [router]);

  return <Component {...Props.pageProps} />;
};

export default CheckAuth;
