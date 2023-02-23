import React from 'react';
import AppLayout from 'components/appLayout';
import { GoogleIcon, GithubIcon, CloseIcon } from 'assets/Icons';
import {
  Container,
  ClosetBtn,
  Form,
  TitleContainer,
  Title,
  LoginBtnContainer,
  LoginButton,
  ContentContainer,
  Text,
  DividerContainer,
  Divider,
  DividerText,
  InputContainer,
  EmailInput,
  PasswordInput,
  NextLoginSessionBtn,
  ForgetPasswordBtn,
  SignInBtn,
  SignInAccent,
} from './styles';

export interface LoginViewProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordInputRef: React.RefObject<HTMLInputElement>;
  handleNextSession: () => void;
  showPasswordInput: boolean;
  fillFormComplete: boolean;
  error: boolean;
  handleJoinRouting: () => void;
  handlePwInquiryRouting: () => void;
}

const LoginView = ({
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
  handleJoinRouting,
  handlePwInquiryRouting,
}: LoginViewProps) => {
  return (
    <AppLayout>
      <Container>
        <ClosetBtn>
          <CloseIcon />
        </ClosetBtn>

        <Form onSubmit={handleSubmit}>
          <TitleContainer>
            <Title>Getit 로그인</Title>
          </TitleContainer>
          <LoginBtnContainer>
            <LoginButton>
              <ContentContainer>
                <GoogleIcon />
                <Text>Google 계정으로 로그인</Text>
              </ContentContainer>
            </LoginButton>
            <LoginButton>
              <ContentContainer>
                <GithubIcon />
                <Text>Github 계정으로 로그인</Text>
              </ContentContainer>
            </LoginButton>
          </LoginBtnContainer>
          <DividerContainer>
            <Divider />
            <DividerText>또는</DividerText>
            <Divider />
          </DividerContainer>
          <InputContainer show={showPasswordInput}>
            <EmailInput
              type='text'
              placeholder='이메일 주소를 입력해주세요.'
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

          <NextLoginSessionBtn onClick={handleNextSession}>
            {fillFormComplete ? '확인' : '다음'}
          </NextLoginSessionBtn>
          <ForgetPasswordBtn onClick={handlePwInquiryRouting}>
            비밀번호를 잊으셨나요?
          </ForgetPasswordBtn>
          <SignInBtn>
            계정이 없으신가요?{' '}
            <SignInAccent onClick={handleJoinRouting}>가입하기</SignInAccent>
          </SignInBtn>
        </Form>
      </Container>
    </AppLayout>
  );
};

export default LoginView;
