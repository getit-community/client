import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const ClosetBtn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;

  &:hover {
    border-radius: 50%;
    background-color: rgba(15, 20, 25, 0.1);
  }

  &:active {
    border-radius: 50%;
    background-color: rgba(15, 20, 25, 0.2);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto auto;
  min-width: 36.4rem;
  max-width: 36.4rem;
  padding: 0 3.2rem 4.8rem 3.2rem;
`;

const TitleContainer = styled.div`
  height: 7.2rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.xxxlarge};
  line-height: 3.2rem;
`;

const LoginBtnContainer = styled.div`
  width: 100%;
`;

const LoginButton = styled.div`
  max-width: 30rem;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 400;
  border: 1px solid rgb(207, 217, 222);
  margin-bottom: 2rem;
  border-radius: 25rem;
  height: 4rem;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  letter-spacing: 0.025rem;
`;

const DividerContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Divider = styled.div`
  background-color: #cfd9de;
  height: 0.1rem;
  width: 100%;
  margin: auto 1rem;
`;
const DividerText = styled.div`
  font-size: 1.7rem;
  white-space: nowrap;
`;
const InputContainer = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  height: 7rem;
  position: relative;

  ${(props) =>
    props.show &&
    css`
      height: 14rem;
    `}
`;

const EmailInput = styled.input`
  border: 1px solid rgb(207, 217, 222);
  height: 5rem;
  border-radius: 0.4rem;
  padding: 0 1rem;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  z-index: 10;

  &:focus {
    border-style: solid;
    border-color: #4dd290;
    outline-style: none;
  }
`;

const PasswordInput = styled.input`
  border: 1px solid rgb(207, 217, 222);
  height: 5rem;
  border-radius: 0.4rem;
  padding: 0 1rem;
  font-size: 1.6rem;
  margin-bottom: 2rem;

  position: absolute;
  width: 100%;
  z-index: 9;

  &:focus {
    border-style: solid;
    border-color: #4dd290;
    outline-style: none;
  }

  animation-name: passwordInput;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  @keyframes passwordInput {
    0% {
      top: 0;
    }
    100% {
      top: 7rem;
    }
  }
`;

const NextLoginSessionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 400;
  background-color: #4dd290;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 25rem;
  height: 4rem;
  font-weight: 600;
  letter-spacing: 0.025rem;
  border-style: none;
  cursor: pointer;

  &:active {
    background-color: #3da571;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
`;

const ForgetPasswordBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 400;
  border: 1px solid rgb(207, 217, 222);
  background-color: #fff;
  color: rgb(134, 145, 150);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 25rem;
  height: 4rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
  cursor: pointer;
`;

const SignInBtn = styled.div`
  color: #536471;
  font-size: 1.5rem;
`;

const SignInAccent = styled.span`
  color: #4dd290;
  font-weight: 500;
`;

export {
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
};
