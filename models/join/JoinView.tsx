import React from 'react';
import AppLayout from 'components/appLayout';
import { CloseIcon } from 'assets/Icons';
import {
  Container,
  ClosetBtn,
  Form,
  TitleContainer,
  Title,
  InputContainer,
  Input,
  ErrorMessage,
  NextBtn,
  PrivacyPolicy,
} from './styles';

export interface JoinViewProps {
  email: string | null;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailInvalidFormatError: boolean;
  password: string | null;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordCheck: string | null;
  onChangePasswordCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordMismatchError: boolean;
  fillFormComplete: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const JoinView = ({
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
}: JoinViewProps) => {
  return (
    <AppLayout>
      <Container>
        <ClosetBtn>
          <CloseIcon />
        </ClosetBtn>
        <Form onSubmit={handleSubmit}>
          <TitleContainer>
            <Title>Getit 계정을 생성하세요</Title>
          </TitleContainer>

          <InputContainer>
            <Input
              type='text'
              placeholder='이메일'
              onChange={onChangeEmail}
              value={email as string}
            />
            {emailInvalidFormatError && (
              <ErrorMessage>올바른 이메일을 입력해 주세요.</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <Input
              type='password'
              placeholder='비밀번호'
              onChange={onChangePassword}
              value={password as string}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type='password'
              placeholder='비밀번호 확인'
              onChange={onChangePasswordCheck}
              value={passwordCheck as string}
            />
            {passwordMismatchError && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </InputContainer>

          <br />

          <NextBtn disabled={!fillFormComplete}>다음</NextBtn>

          <PrivacyPolicy>
            가입하면 <span>쿠키 사용</span>을 포함해 <span>이용약관</span> 및{' '}
            <span>개인정보 처리방침에</span> 동의하게 됩니다. Getit은 계정을
            안전하게 보호하고 광고를 포함한 맞춤 서비스를 제공하는 등 Getit
            개인정보 처리방침에 명시된 목적을 위해 이메일 주소 정보를 사용할 수
            있습니다. <span>자세히 알아보기.</span> 이메일을 제공하시면 다른
            사람들이 이 정보로 내 계정을 찾을 수 있게 됩니다.
          </PrivacyPolicy>
        </Form>
      </Container>
    </AppLayout>
  );
};

export default JoinView;
