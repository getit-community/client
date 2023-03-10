import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginView, { LoginViewProps } from './LoginView';
import { loginAPI } from 'apis/login';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { AxiosErrorData } from 'apis/types';

const LoginController = () => {
  const router = useRouter();
  const isMobile = useSelector((state: RootState) => state.user.isMobile);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [fillFormComplete, setFillFormComplete] = useState(false);

  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    router.replace('/');
  }, [router]);

  useEffect(() => {
    passwordInputRef.current?.focus();
  }, [showPasswordInput]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!email) {
        return;
      }

      if (email) {
        setShowPasswordInput(true);
      }

      if (email && password) {
        const data = { email, password };
        try {
          const response = await loginAPI(data);

          if (response?.success) {
            if (response.message === 'needResetPassword') {
              return router.replace('/resetPassword');
            } else {
              return router.replace('/');
            }
          }
        } catch (error) {
          if (axios.isAxiosError<AxiosErrorData>(error)) {
            alert(error.response?.data.message);
          }
        }
      }
    },

    [email, password, router],
  );

  const handleSocialLogin = useCallback(
    async (event: React.MouseEvent) => {
      if (!event) return;
      const target = event.currentTarget as HTMLDivElement;
      const loginType = target.getAttribute('data-name') as 'google' | 'github';

      if (loginType === 'google') {
        return router.push(
          `${process.env.NEXT_PUBLIC_SERVER_API_HOST}/user/login/google`,
        );
      }
      if (loginType === 'github') {
        return router.push(
          `${process.env.NEXT_PUBLIC_SERVER_API_HOST}/user/login/github`,
        );
      }
    },
    [router],
  );

  const handleEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let email = event.target.value;

      setEmail(email);
      setPassword('');
      setShowPasswordInput(false);
      setFillFormComplete(false);
    },
    [],
  );

  const handlePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let password = event.target.value;

      setPassword(password);

      if (password.length > 0) {
        setFillFormComplete(true);
      } else {
        setFillFormComplete(false);
      }
    },
    [],
  );

  const handleSignupRouting = useCallback(() => {
    router.push('/signup');
  }, [router]);

  const handlePwInquiryRouting = useCallback(() => {
    router.push('/pwInquiry');
  }, [router]);

  useEffect(() => {
    const { duplicate, hasEmailInfo, error } = router.query;

    if (hasEmailInfo === 'false') {
      alert(
        '???????????? ????????? ????????? ????????? ????????????. ????????? ????????? ??????????????????.',
      );
      router.replace('/login');
    }

    if (duplicate === 'true') {
      alert('????????? ???????????? ????????? ???????????? ???????????????.');
      router.replace('/login');
    }

    if (error === 'true') {
      alert('????????? ??????????????????. ?????? ??? ?????? ????????? ?????????.');
      router.replace('/login');
    }
  }, [router]);

  const props: LoginViewProps = {
    isMobile,
    handleClose,
    handleSubmit,
    email,
    handleEmail,
    password,
    handlePassword,
    passwordInputRef,
    showPasswordInput,
    fillFormComplete,
    handleSignupRouting,
    handlePwInquiryRouting,
    handleSocialLogin,
  };

  return <LoginView {...props} />;
};

export default LoginController;
