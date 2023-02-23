import { CloseIcon } from 'assets/Icons';
import AppLayout from 'components/appLayout';
import React from 'react';
import {
  ClosetBtn,
  Container,
  InputContainer,
  Title,
  TitleContainer,
  NextBtn,
  Form,
  Input,
  ErrorMessage,
  NoticeForSpam,
  Timer,
} from './styles';

export interface EmailAuthViewProps {
  inputAuthNums: string | null;
  onChangeInputAuthNums: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invalidAuthNumsError: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  timer: string;
}

const EmailAuthView = ({
  inputAuthNums,
  onChangeInputAuthNums,
  invalidAuthNumsError,
  handleSubmit,
  timer,
}: EmailAuthViewProps) => {
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
              placeholder='인증번호'
              onChange={onChangeInputAuthNums}
              value={inputAuthNums as string}
            />
            {invalidAuthNumsError && (
              <ErrorMessage>인증번호가 일치하지 않습니다.</ErrorMessage>
            )}
            <Timer>인증기한 {timer}</Timer>
          </InputContainer>

          <NoticeForSpam>
            메일이 전송되지 않았다면 스팸메일함을 확인해주세요.
          </NoticeForSpam>
          <br />

          <NextBtn>확인</NextBtn>
        </Form>
      </Container>
    </AppLayout>
  );
};

export default EmailAuthView;
