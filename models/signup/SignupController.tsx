import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import JoinView, { JoinViewProps } from './SignupView';
import useInput from 'hooks/useInput';
import { useDispatch } from 'react-redux';
import { emailAuth } from 'features/signup';

const JoinController = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, onChangeEmail] = useInput('');
  const [emailInvalidError, setEmailInvalidError] = useState(false);
  const [password, onChangePassword] = useInput('');
  const [passwordRestrictionError, setPasswordRestrictionError] =
    useState(false);
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);
  const [fillFormComplete, setFillFormComplete] = useState(false);

  const handleClose = useCallback(() => {
    router.push('/login');
  }, [router]);

  const checkEmailFormatValidate = useCallback(() => {
    // email 형식 확인 정규식
    const emailValidationRegexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isEmailValidate = emailValidationRegexp.test(email as string);

    return isEmailValidate;
  }, [email]);

  const checkPasswordRestriction = useCallback(() => {
    // password 영문자, 숫자, 특수문자 조합 8 ~ 20자리 형식 확인 정규식
    const passwordValidationRegexp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

    const isCorrectPassword = passwordValidationRegexp.test(password as string);

    return isCorrectPassword;
  }, [password]);

  const checkPasswordMatch = useCallback(() => {
    return password === passwordCheck ?? false;
  }, [password, passwordCheck]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValidEmail = checkEmailFormatValidate();
      const isPasswordMatch = checkPasswordMatch();
      const isCorrectPassword = checkPasswordRestriction();

      if (!isValidEmail) {
        return setEmailInvalidError(true);
      }

      if (!isCorrectPassword) {
        return setPasswordRestrictionError(true);
      }

      if (!isPasswordMatch) {
        return setPasswordMismatchError(true);
      }

      if (fillFormComplete && isPasswordMatch) {
        if (email === null || password === null) return;

        let data = { email, password };

        dispatch(emailAuth(data));

        router.push('/join/emailAuth');
      }
    },
    [
      router,
      dispatch,
      email,
      checkEmailFormatValidate,
      password,
      checkPasswordRestriction,
      checkPasswordMatch,
      fillFormComplete,
    ],
  );

  // input 입력시 에러 제거
  useEffect(() => {
    setEmailInvalidError(false);
  }, [email]);

  useEffect(() => {
    setPasswordRestrictionError(false);
  }, [password]);

  useEffect(() => {
    setPasswordMismatchError(false);
  }, [passwordCheck]);

  useEffect(() => {
    let isFormComplete = Boolean(email && password && passwordCheck);
    console.log('isFormComplete ===>', isFormComplete);

    setFillFormComplete(isFormComplete);
  }, [email, password, passwordCheck]);

  const props: JoinViewProps = {
    handleClose,
    email,
    onChangeEmail,
    emailInvalidError,
    password,
    onChangePassword,
    passwordRestrictionError,
    passwordCheck,
    onChangePasswordCheck,
    passwordMismatchError,
    fillFormComplete,
    handleSubmit,
  };
  return <JoinView {...props} />;
};

export default JoinController;
