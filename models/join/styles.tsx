import styled from 'styled-components';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto auto;
  min-width: 36.4rem;
  max-width: 36.4rem;
  padding: 0 3.2rem 4.8rem 3.2rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-size: 1.4rem;
  color: #e5503c;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const PrivacyPolicy = styled.div`
  font-size: 1.2rem;

  span {
    color: #26a063;
  }
`;

export { Container, Form, InputContainer, ErrorMessage, PrivacyPolicy };
