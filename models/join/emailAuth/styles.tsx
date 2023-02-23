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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid rgb(207, 217, 222);
  height: 5rem;
  border-radius: 0.4rem;
  padding: 0 1rem;
  font-size: 1.6rem;
  margin-bottom: 2rem;

  &:focus {
    border-style: solid;
    border-color: #4dd290;
    outline-style: none;
  }
`;

const ErrorMessage = styled.div`
  font-size: 1.4rem;
  color: #e5503c;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const NextBtn = styled.button`
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
  cursor: 'pointer';

  &:active {
    background-color: #3da571;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
`;

const NoticeForSpam = styled.div`
  font-size: 1.4rem;
  color: #000;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export {
  Container,
  ClosetBtn,
  Form,
  TitleContainer,
  Title,
  InputContainer,
  Input,
  ErrorMessage,
  NextBtn,
  NoticeForSpam,
};
