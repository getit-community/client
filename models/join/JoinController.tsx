import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import JoinView, { JoinViewProps } from './JoinView';
import useInput from 'hooks/useInput';

const JoinController = () => {
  const router = useRouter();

  const [email, onChangeEmail] = useInput('');
  const [emailInvalidFormatError, setEmailInvalidFormatError] = useState(false);
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);
  const [fillFormComplete, setFillFormComplete] = useState(false);

  const checkEmailValidateFormat = useCallback(() => {
    const emailValidationRegexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isEmailValidate = emailValidationRegexp.test(email as string);

    return isEmailValidate;
  }, [email]);

  const checkPasswordMatch = useCallback(() => {
    return password === passwordCheck ?? false;
  }, [password, passwordCheck]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValidEmail = checkEmailValidateFormat();
      const isPasswordMatch = checkPasswordMatch();

      if (!isValidEmail) {
        return setEmailInvalidFormatError(true);
      }

      if (!isPasswordMatch) {
        return setPasswordMismatchError(true);
      }

      if (fillFormComplete && isPasswordMatch) {
        console.log({ email, password, passwordCheck }); // dispatch email & password info

        router.push('/join/emailAuth');
      }
    },
    [
      router,
      email,
      password,
      passwordCheck,
      checkEmailValidateFormat,
      checkPasswordMatch,
      fillFormComplete,
    ],
  );

  useEffect(() => {
    let resetErrorStatus: number;

    if (emailInvalidFormatError) {
      resetErrorStatus = window.setTimeout(() => {
        setEmailInvalidFormatError(false);
      }, 2000);
    }

    if (passwordMismatchError) {
      resetErrorStatus = window.setTimeout(() => {
        setPasswordMismatchError(false);
      }, 2000);
    }

    return () => {
      clearTimeout(resetErrorStatus);
    };
  }, [emailInvalidFormatError, passwordMismatchError]);

  useEffect(() => {
    let isFormComplete = Boolean(email && password && passwordCheck);
    console.log('isFormComplete ===>', isFormComplete);

    setFillFormComplete(isFormComplete);
  }, [email, password, passwordCheck]);

  const props: JoinViewProps = {
    email,
    onChangeEmail,
    emailInvalidFormatError,
    password,
    onChangePassword,
    passwordCheck,
    onChangePasswordCheck,
    passwordMismatchError,
    fillFormComplete,
    handleSubmit,
  };
  return <JoinView {...props} />;
};

export default JoinController;
