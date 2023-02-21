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
  EmailLoginInput,
  NextLoginSessionBtn,
  ForgetPasswordBtn,
  SignInBtn,
  SignInAccent,
} from './styles';

const Login = () => {
  return (
    <AppLayout>
      <Container>
        <ClosetBtn>
          <CloseIcon />
        </ClosetBtn>

        <Form>
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
            <Divider>&nbsp;</Divider>
            <DividerText>또는</DividerText>
            <Divider />
          </DividerContainer>
          <EmailLoginInput
            type='text'
            placeholder='이메일 주소를 입력해주세요.'
          />
          <NextLoginSessionBtn>다음</NextLoginSessionBtn>
          <ForgetPasswordBtn>비밀번호를 잊으셨나요?</ForgetPasswordBtn>
          <SignInBtn>
            계정이 없으신가요? <SignInAccent>가입하기</SignInAccent>
          </SignInBtn>
        </Form>
      </Container>
    </AppLayout>
  );
};

export default Login;
