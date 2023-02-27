import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from 'store';
import { AxiosError } from 'axios';
import useInput from 'hooks/useInput';
import EmailAuthView, { EmailAuthViewProps } from './EmailAuthView';
import { resetAuth, updateAuthNums } from 'features/signup';
import { emailAuthApi } from 'apis/signup/emailAuth/postAuthEmail';
import { signupApi, SignupApiData } from 'apis/signup/postSignup';

const EmailAuthController = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const email = useSelector((state: RootState) => state.signup.email);
  const password = useSelector((state: RootState) => state.signup.password);
  const authNums = useSelector((state: RootState) => state.signup.authNums);

  const [inputAuthNums, onChangeInputAuthNums] = useInput('');
  const [invalidAuthNumsError, setInvalidAuthNumsError] = useState(false);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  const handleClose = useCallback(() => {
    router.replace('/signup');
  }, [router]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (inputAuthNums === '') {
        return setInvalidAuthNumsError(true);
      }

      if (inputAuthNums === authNums) {
        try {
          const data: SignupApiData = { email, password, signupType: 'email' };
          const response = await signupApi(data);

          if (response?.success) {
            alert('회원가입 완료. 환영합니다 🎉');
            dispatch(resetAuth());
            return router.replace('/');
          }
        } catch (error) {
          console.log(error);
          const err = error as AxiosError<{
            success: boolean;
            message: string;
          }>;
          alert(err.response?.data.message);
        }
      } else {
        if (authNums !== '') {
          setInvalidAuthNumsError(true);
        }
      }
    },
    [inputAuthNums, authNums, email, password, router, dispatch],
  );

  useEffect(() => {
    setInvalidAuthNumsError(false);
  }, [inputAuthNums]);

  useEffect(() => {
    try {
      (async () => {
        if (email) {
          const response = await emailAuthApi({ email });
          dispatch(updateAuthNums({ authNums: response?.authNums }));
        }
      })();
    } catch (error) {
      console.log(error);
    }

    return () => {
      dispatch(updateAuthNums({ authNums: '' }));
    };
  }, [dispatch, email]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    if (minutes === 0 && seconds === 0) {
      dispatch(resetAuth());
    }

    return () => {
      clearInterval(countdown);
    };
  }, [minutes, seconds, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(updateAuthNums({ authNums: '' }));
    };
  }, [dispatch]);

  const props: EmailAuthViewProps = {
    handleClose,
    inputAuthNums,
    onChangeInputAuthNums,
    invalidAuthNumsError,
    handleSubmit,
    timer: `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`,
    authNums: authNums as string,
  };
  return <EmailAuthView {...props} />;
};

export default EmailAuthController;
