import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { authAPI } from 'apis/auth';

export const withAuth = (Component: NextPage) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      (async () => {
        const response = await authAPI();

        if (response?.success) {
          setIsLoggedIn(true);
          router.replace('/');
        } else {
          setIsLoggedIn(false);
        }
      })();
    }, [router]);

    return isLoggedIn ? null : <Component />;
  };

  return AuthenticatedComponent;
};
