import React, {
  useCallback,
  useEffect,
  useReducer,
  useState,
  useRef,
} from 'react';
import { useRouter } from 'next/router';
import Login from './index';
import { loginApi } from 'apis/login';

const Controller = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [fillFormComplete, setFillFormComplete] = useState(false);
  const [error, setError] = useState(false);

  const passwordInputRef = useRef<HTMLInputElement>(null);

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
        const data = {
          email,
          password,
        };

        const result = await loginApi(data);

        if (result?.success) {
          router.push('/');
        } else {
          alert('유효하지 않는 계정입니다.');
        }
        return;
      }
    },

    [email, password, router],
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

  const handleNextSession = useCallback(() => {
    if (!email) {
      return;
    } else {
      setShowPasswordInput(true);
      if (!password) {
        passwordInputRef.current?.focus();
      }
    }
  }, [email, password]);

  const props = {
    handleSubmit,
    email,
    handleEmail,
    password,
    handlePassword,
    passwordInputRef,
    handleNextSession,
    showPasswordInput,
    fillFormComplete,
    error,
  };

  return <Login {...props} />;
};

export default Controller;
