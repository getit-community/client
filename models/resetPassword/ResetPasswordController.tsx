import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ResetPasswordView, { ResetPasswordViewProps } from './ResetPasswordView';
import { logoutAPI } from 'apis/logout';
import { resetPasswordAPI } from 'apis/resetPassword';
import useInput from 'hooks/useInput';
import { AxiosError } from 'axios';

const ResetPasswordController = () => {
  const router = useRouter();
  const [newPassword, onChangeNewPassword] = useInput('');
  const [newPasswordInvalidError, setNewPasswordInvalidError] = useState(false);
  const [doubleCheckPassword, onChangeDoubleCheckPassword] = useInput('');
  const [doubleCheckPasswordError, setDoubleCheckPasswordError] =
    useState(false);

  const checkPasswordValidate = useCallback(() => {
    // password 영문자, 숫자, 특수문자 조합 8 ~ 20자리 형식 확인 정규식
    const passwordValidationRegexp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

    const isCorrectPassword = passwordValidationRegexp.test(
      newPassword as string,
    );

    return isCorrectPassword;
  }, [newPassword]);

  const checkPasswordMatch = useCallback(() => {
    return newPassword === doubleCheckPassword ?? false;
  }, [newPassword, doubleCheckPassword]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValidePassword = checkPasswordValidate();
      const isPasswordMatch = checkPasswordMatch();

      if (!isValidePassword) {
        return setNewPasswordInvalidError(true);
      }

      if (!isPasswordMatch) {
        return setDoubleCheckPasswordError(true);
      }

      if (newPassword && doubleCheckPassword) {
        try {
          const resetPasswordAPIResponse = await resetPasswordAPI({
            password: newPassword,
          });
          if (resetPasswordAPIResponse?.success) {
            const logoutAPIResponse = await logoutAPI();

            if (logoutAPIResponse?.success) {
              alert(resetPasswordAPIResponse.message);
              router.replace('/login');
            }
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
    [
      checkPasswordValidate,
      checkPasswordMatch,
      newPassword,
      doubleCheckPassword,
      router,
    ],
  );

  const handleLogout = useCallback(async () => {
    const response = await logoutAPI();
    if (response?.success) {
      router.replace('/');
    }
  }, [router]);

  useEffect(() => {
    setNewPasswordInvalidError(false);
  }, [newPassword]);

  useEffect(() => {
    setDoubleCheckPasswordError(false);
  }, [doubleCheckPassword]);

  const props: ResetPasswordViewProps = {
    newPassword,
    onChangeNewPassword,
    newPasswordInvalidError,
    doubleCheckPassword,
    onChangeDoubleCheckPassword,
    doubleCheckPasswordError,
    handleSubmit,
    handleLogout,
  };

  return <ResetPasswordView {...props} />;
};

export default ResetPasswordController;
