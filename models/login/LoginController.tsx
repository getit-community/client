import React, {
  useCallback,
  useEffect,
  useReducer,
  useState,
  useRef,
} from 'react';
import { useRouter } from 'next/router';
import LoginView, { LoginViewProps } from './LoginView';
import { loginApi } from 'apis/login';
import { AxiosError } from 'axios';

const LoginController = () => {
  const router = useRouter();

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
          const result = await loginApi(data);

          if (result?.success) {
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

    [email, password, router],
  );

  const handleSocialLogin = useCallback((event: React.MouseEvent) => {
    if (!event) return;
    const target = event.currentTarget as HTMLDivElement;
    console.log(target.getAttribute('data-name'));
  }, []);

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
