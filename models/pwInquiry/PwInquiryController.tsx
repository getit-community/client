import { pwInquiryAPI } from 'apis/pwInquiry';
import { AxiosError } from 'axios';
import useInput from 'hooks/useInput';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import PwInquiryView, { PwInquiryViewProps } from './PwInquiryView';

const PwInquiryController = () => {
  const router = useRouter();
  const [email, onChangeEmail] = useInput('');
  const [emailInvalidError, setEmailInvalidError] = useState(false);

  const checkEmailFormatValidate = useCallback(() => {
    // email 형식 확인 정규식
    const emailValidationRegexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isEmailValidate = emailValidationRegexp.test(email as string);

    return isEmailValidate;
  }, [email]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValidEmail = checkEmailFormatValidate();

      if (!email) {
        return;
      }

      if (!isValidEmail) {
        return setEmailInvalidError(true);
      }

      try {
        const response = await pwInquiryAPI({ email });

        if (response?.success) {
          alert(response.message);
          router.push('/login');
        } else {
          alert(response?.message);
        }
      } catch (error) {
        const err = error as AxiosError<{
          success: boolean;
          message: string;
        }>;

        alert(err.response?.data.message);
      }
    },
    [email, router, checkEmailFormatValidate],
  );

  const handleSignup = useCallback(() => {
    router.push('/signup');
  }, [router]);

  // input 입력시 에러 제거
  useEffect(() => {
    setEmailInvalidError(false);
  }, [email]);

  const props: PwInquiryViewProps = {
    email,
    onChangeEmail,
    emailInvalidError,
    handleSubmit,
    handleSignup,
  };
  return <PwInquiryView {...props} />;
};

export default PwInquiryController;
