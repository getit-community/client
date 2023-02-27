import React from 'react';
import AppLayout from 'components/appLayout';
import { GoogleIcon, GithubIcon } from 'assets/Icons';
import {
  Container,
  Form,
  InputContainer,
  PasswordInput,
  SignInBtn,
  SignInAccent,
} from './styles';
import Button from 'components/commons/button';
import Title from 'components/commons/title';
import Divider from 'components/commons/divider';
import Input from 'components/commons/input';

export interface LoginViewProps {
  email: string;
  handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordInputRef: React.RefObject<HTMLInputElement>;
  handleEmailLogin: () => void;
  showPasswordInput: boolean;
  fillFormComplete: boolean;
  error: boolean;
  handleSignupRouting: () => void;
  handlePwInquiryRouting: () => void;
  handleClose: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleSocialLogin: (event: React.MouseEvent) => void;
}

const LoginView = ({
  handleClose,
  handleSubmit,
  handleSocialLogin,
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
}: LoginViewProps) => {
  return (
    <AppLayout>
      <Container>
        <Button type='close' onClick={handleClose} />

        <Form onSubmit={handleSubmit}>
          <Title text='Getit 로그인' />

          <Button
            type='normal'
            text='Google 계정으로 로그인'
            icon={<GoogleIcon />}
            name='google'
            onClick={handleSocialLogin}
          />
          <Button
            type='normal'
            text='Github 계정으로 로그인'
            icon={<GithubIcon />}
            name='github'
            onClick={handleSocialLogin}
          />
          <Divider type='text' text='또는' />
          <InputContainer show={showPasswordInput}>
            <Input
              placeholder={'이메일 주소를 입력해주세요.'}
              onChange={handleEmail}
              value={email}
            />
            {showPasswordInput && (
              <PasswordInput
                type='password'
                placeholder='비밀번호를 입력해주세요.'
                onChange={handlePassword}
                value={password}
                ref={passwordInputRef}
              />
            )}
          </InputContainer>

          <Button
            type='submit'
            text={fillFormComplete ? '확인' : '다음'}
            onClick={handleEmailLogin}
          />

          <Button
            type='normal'
            text='비밀번호를 잊으셨나요?'
            onClick={handlePwInquiryRouting}
          />
          <SignInBtn>
            계정이 없으신가요?{' '}
            <SignInAccent onClick={handleSignupRouting}>가입하기</SignInAccent>
          </SignInBtn>
        </Form>
      </Container>
    </AppLayout>
  );
};

export default LoginView;
