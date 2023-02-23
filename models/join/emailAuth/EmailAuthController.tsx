import React, { useCallback, useEffect, useRef, useState } from 'react';
import useInput from 'hooks/useInput';
import { emailAuthApi } from 'apis/join';
import { useDispatch, useSelector } from 'react-redux';
import EmailAuthView, { EmailAuthViewProps } from './EmailAuthView';
import { JoinState, updateAuthNums } from 'reducers/join';
import { RootState } from 'store';

const EmailAuthController = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.join.email);
  const authNums = useSelector((state: RootState) => state.join.authNums);

  const [inputAuthNums, onChangeInputAuthNums] = useInput('');
  const [invalidAuthNumsError, setInvalidAuthNumsError] = useState(false);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (inputAuthNums === '') {
        return setInvalidAuthNumsError(true);
      }

      if (inputAuthNums === authNums) {
        //TODO 가입 api 연결
        console.log('인증성공');
      } else {
        setInvalidAuthNumsError(true);
      }
    },
    [inputAuthNums, authNums],
  );

  useEffect(() => {
    setInvalidAuthNumsError(false);
  }, [inputAuthNums]);

  useEffect(() => {
    (async () => {
      if (email) {
        const response = await emailAuthApi({ email });
        dispatch(updateAuthNums({ authNums: response?.authNums }));
      }
    })();

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
      dispatch(updateAuthNums({ authNums: '' }));
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
    inputAuthNums,
    onChangeInputAuthNums,
    invalidAuthNumsError,
    handleSubmit,
    timer: `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`,
  };
  return <EmailAuthView {...props} />;
};

export default EmailAuthController;
