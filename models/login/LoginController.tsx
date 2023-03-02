import React, { useCallback, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import LoginView, { LoginViewProps } from './LoginView';
import { loginApi } from 'apis/login';
import { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { updateUser } from 'features/user';

const LoginController = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [fillFormComplete, setFillFormComplete] = useState(false);
  const [error, setError] = useState(false);

  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    router.replace('/');
  }, [router]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log({ email, password });

      if (!email) {
        return;
      }

      if (email) {
        setShowPasswordInput(true);
        if (!password) {
          passwordInputRef.current?.focus();
        }
      }

      if (email && password) {
        const data = { email, password };
        try {
          const response = await loginApi(data);

          if (response?.success) {
            const { email, nickname } = response.data;

            dispatch(updateUser({ email, nickname }));

            return router.replace('/');
          }
        } catch (error) {
          const err = error as AxiosError<{
            success: boolean;
            message: string;
          }>;
          alert(err.response?.data.message);
        }
      }
    },

    [email, password, router, dispatch],
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

  const handleEmailLogin = useCallback(async () => {
    if (!email) return;

    if (email) return setShowPasswordInput(true);

    if (!password) return passwordInputRef.current?.focus();

    if (email && password) {
      const data = { email, password };
      try {
        const response = await loginApi(data);
        if (response?.success) {
          router.push('/');
        }
      } catch (error) {
        const err = error as AxiosError<{
          success: boolean;
          message: string;
        }>;

        alert(err.response?.data.message);
      }
    }
  }, [email, password, router]);

  const handleSignupRouting = useCallback(() => {
    router.push('/signup');
  }, [router]);

  const handlePwInquiryRouting = useCallback(() => {
    router.push('/pwInquiry');
  }, [router]);

  const props: LoginViewProps = {
    handleClose,
    handleSubmit,
    email,
    handleEmail,
    password,
    handlePassword,
    passwordInputRef,
    handleEmailLogin,
    showPasswordInput,
    fillFormComplete,
    error,
    handleSignupRouting,
    handlePwInquiryRouting,
    handleSocialLogin,
  };

  return <LoginView {...props} />;
};

export default LoginController;
